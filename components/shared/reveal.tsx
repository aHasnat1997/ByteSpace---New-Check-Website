"use client"

import { CSSProperties, useRef, useEffect, useState, type ReactNode } from "react"

/**
 * Reveal animation directions.
 * "fade-up"    – fades in while rising from below (default)
 * "fade-down"  – fades in while dropping from above
 * "fade-left"  – fades in sliding from the right
 * "fade-right" – fades in sliding from the left
 * "fade"       – pure opacity reveal (no movement)
 */
export type RevealDirection =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  /** Delay before the animation starts, in seconds */
  delay?: number
  /** Duration of the animation, in seconds */
  duration?: number
  /** Distance to travel, in pixels */
  distance?: number
  /** Extra class names applied to the wrapper */
  className?: string
  /** Intersection threshold (0–1) to trigger below-fold elements */
  threshold?: number
  /**
   * When true, always plays the reveal animation on mount — even if the
   * element is already in the viewport. Use this for hero / above-fold
   * content where you want a deliberate entrance animation.
   * Default: false (in-view elements are shown immediately with no animation).
   */
  animateOnMount?: boolean
}

type State = "pre-init" | "ready" | "visible"

const easing = "cubic-bezier(0.21, 0.47, 0.32, 0.98)"

/**
 * Scroll-triggered reveal wrapper.
 *
 * How it avoids the blank-page SSR problem:
 *
 *   1. Server / first paint → renders a plain <div> with NO inline styles.
 *      The HTML is fully visible from the first byte.
 *
 *   2. After JS mounts (useEffect) → synchronous getBoundingClientRect check:
 *      • Already in viewport  → jumps straight to "visible". Content stays
 *        visible. No flash, no animation stall.
 *      • Below the fold       → snaps to "ready" (opacity 0, offset applied)
 *        WITHOUT a CSS transition, so the snap is instantaneous and the user
 *        can't see it (it's off-screen). IntersectionObserver then animates
 *        it in when the user scrolls to it.
 *
 *   Always uses ONE element type (<div>) so the ref is never detached and
 *   the IntersectionObserver always watches the correct DOM node.
 *
 * @example
 * <Reveal direction="fade-up" delay={0.1}>
 *   <MyComponent />
 * </Reveal>
 */
export default function Reveal({
  children,
  direction = "fade-up",
  delay = 0,
  duration = 0.65,
  distance = 40,
  className,
  threshold = 0.15,
  animateOnMount = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<State>("pre-init")

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // ── animateOnMount: force entrance animation for above-fold content ──
    // Server renders visible (pre-init, no styles).
    // After mount: snap to hidden, then two rAFs later transition to visible.
    // The double-rAF ensures the browser has painted the hidden state
    // so the CSS transition has a "from" value to animate from.
    if (animateOnMount) {
      setState("ready")
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => setState("visible"))
        return () => cancelAnimationFrame(id2)
      })
      return () => cancelAnimationFrame(id1)
    }

    // ── Default: viewport-aware scroll reveal ──
    const { top, bottom } = element.getBoundingClientRect()
    const inView = top < window.innerHeight && bottom > 0

    if (inView) {
      // Already visible on mount — stay visible, skip animation.
      setState("visible")
      return
    }

    // Element is below the fold: snap to hidden (no transition, off-screen
    // so user can't see the snap), then animate in on scroll.
    setState("ready")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible")
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, animateOnMount])

  // ── Style calculation ────────────────────────────────────────────────────

  const offset: Record<RevealDirection, string> = {
    "fade-up":    `translate3d(0, ${distance}px, 0)`,
    "fade-down":  `translate3d(0, -${distance}px, 0)`,
    "fade-left":  `translate3d(${distance}px, 0, 0)`,
    "fade-right": `translate3d(-${distance}px, 0, 0)`,
    "fade":       "translate3d(0, 0, 0)",
  }

  let style: CSSProperties

  if (state === "pre-init") {
    // SSR + first paint: no styles → content visible in HTML.
    style = {}
  } else if (state === "ready") {
    // Below fold, waiting for scroll.
    // No transition here — the snap to hidden is instantaneous.
    style = {
      opacity: 0,
      transform: offset[direction],
      willChange: "opacity, transform",
    }
  } else {
    // "visible" — animate in with CSS transition.
    style = {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: [
        `opacity ${duration}s ${easing} ${delay}s`,
        `transform ${duration}s ${easing} ${delay}s`,
      ].join(", "),
      willChange: "opacity, transform",
    }
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
