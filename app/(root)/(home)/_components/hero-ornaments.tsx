"use client"

import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import { useEffect, useState } from "react"
import StarIcon from "@/svgs/Style=Outlined-8.svg"

const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/** Shared easing curve for a premium deceleration feel */
const easing = "cubic-bezier(0.21, 0.47, 0.32, 0.98)"

/**
 * Custom hook to trigger entrance animations after mount.
 * Uses double requestAnimationFrame to ensure the browser paints the initial
 * (hidden) state before applying the CSS transition to the visible state.
 */
function useEntranceAnimation() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setReady(true))
      return () => cancelAnimationFrame(id2)
    })
    return () => cancelAnimationFrame(id1)
  }, [])
  return ready
}

// ─── Box type (mirrors what Ornament expects) ─────────────────────────────
type Box = {
  w: number
  h: number
  left?: number
  right?: number
  top?: number
  bottom?: number
}

const boxStyle = (b: Box): CSSProperties => ({
  width: px(b.w),
  height: px(b.h),
  left: b.left !== undefined ? px(b.left) : undefined,
  right: b.right !== undefined ? px(b.right) : undefined,
  top: b.top !== undefined ? px(b.top) : undefined,
  bottom: b.bottom !== undefined ? px(b.bottom) : undefined,
})

/**
 * Inline animated version of Ornament using pure CSS transitions.
 */
function AnimatedOrnament({
  n,
  box,
  fit,
  initial,
  delay = 0,
}: {
  n: string
  box: Box
  fit: "object-left" | "object-right"
  initial: { opacity: number; x?: number; y?: number }
  delay?: number
}) {
  const ready = useEntranceAnimation()

  const x = initial.x ?? 0
  const y = initial.y ?? 0

  return (
    <div
      className="absolute"
      style={{
        ...boxStyle(box),
        opacity: ready ? 1 : initial.opacity,
        transform: ready ? "translate3d(0, 0, 0)" : `translate3d(${x}px, ${y}px, 0)`,
        transition: `opacity 0.9s ${easing} ${delay}s, transform 0.9s ${easing} ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      <Image
        src={n}
        alt="Hero ornament"
        fill
        sizes="400px"
        className={`object-contain ${fit}`}
      />
    </div>
  )
}

// ─── Stage (inline, same as shared/stage but kept here for self-containment) ─
function Stage({
  width,
  className = "",
  children,
}: {
  width: number
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`absolute inset-y-0 left-1/2 z-20 -translate-x-1/2 ${className}`}
      style={{ width: px(width) }}
    >
      {children}
    </div>
  )
}

/** White floating card — animate on mount with a fade-up reveal. */
function FloatingCard({
  className = "",
  style,
  scale,
  origin,
  children,
  delay = 0,
}: {
  className?: string
  style: CSSProperties
  scale: string
  origin: string
  children: ReactNode
  delay?: number
}) {
  const ready = useEntranceAnimation()

  return (
    <div
      className={`absolute rounded-[16px] bg-white p-4 backdrop-blur-[10px] ${className}`}
      style={{
        ...style,
        transform: `translate3d(0, ${ready ? 0 : 28}px, 0) scale(${scale})`,
        transformOrigin: origin,
        opacity: ready ? 1 : 0,
        transition: `opacity 0.7s ${easing} ${delay}s, transform 0.7s ${easing} ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}

function UiUxContent() {
  return (
    <>
      <p className="body-m font-medium text-neutral-950">UI/UX Design</p>
      <p className="body-xs text-neutral-400">
        200 Courses <span className="mx-2">•</span> 1000+ Students
      </p>
    </>
  )
}

function ProgressContent() {
  const ready = useEntranceAnimation()

  return (
    <>
      <p className="body-m font-medium text-neutral-950">Learning Progress</p>
      <p className="font-heading text-[48px] leading-none font-semibold text-neutral-950">
        55%
      </p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-200">
        {/* Progress bar fill animates in after the card appears */}
        <div
          className="h-full rounded-full bg-secondary"
          style={{
            width: ready ? "55%" : "0%",
            transition: `width 1.1s ${easing} 1.4s`,
            willChange: "width",
          }}
        />
      </div>
    </>
  )
}

function StudentsContent() {
  return (
    <>
      <p className="body-m font-medium text-neutral-950">Happy Students</p>
      <div className="flex items-center gap-1 body-xs text-neutral-950">
        <span> 4.5 </span>
        <span className="text-neutral-400"> (240)</span>
        <StarIcon className="size-4 text-secondary-300" />
      </div>

      <div className="mt-2 flex items-center">
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <Image
            key={n}
            src={`/images/profile-${n}.png`}
            alt=""
            width={28}
            height={28}
            className="-ml-3.5 size-10.75 rounded-full object-cover first:ml-0"
          />
        ))}
        <span className="-ml-3.5 flex size-10.75 items-center justify-center rounded-full bg-secondary text-xs font-bold text-neutral-950">
          2K+
        </span>
      </div>
    </>
  )
}

export default function Ornaments() {
  const k = "var(--k)"
  const ready = useEntranceAnimation()

  return (
    <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
      {/* ───────── Tablet + desktop ornaments (1920px design space) ───────── */}
      <Stage width={1920} className="max-md:hidden">
        {/* Left-side corner ornaments — slide in from the left */}
        <AnimatedOrnament
          n="/images/ornaments-1.png"
          fit="object-left"
          box={{ w: 386.79, h: 386.79, left: 0, top: 221 }}
          initial={{ opacity: 0, x: -60 }}
          delay={0.3}
        />
        {/* Right-side corner ornaments — slide in from the right */}
        <AnimatedOrnament
          n="/images/ornaments-2.png"
          fit="object-right"
          box={{ w: 386.79, h: 386.79, right: 0, top: 221 }}
          initial={{ opacity: 0, x: 60 }}
          delay={0.3}
        />
        {/* Small inner-left ornament */}
        <AnimatedOrnament
          n="/images/ornaments-3.png"
          fit="object-left"
          box={{ w: 175.81, h: 175.81, left: 192, top: 492 }}
          initial={{ opacity: 0, x: -40 }}
          delay={0.55}
        />
        {/* Small inner-right ornament */}
        <AnimatedOrnament
          n="/images/ornaments-4.png"
          fit="object-right"
          box={{ w: 175.81, h: 175.81, left: 1552, top: 472 }}
          initial={{ opacity: 0, x: 40 }}
          delay={0.55}
        />
        {/* Bottom-left ornament — fade up */}
        <AnimatedOrnament
          n="/images/ornaments-5.png"
          fit="object-left"
          box={{ w: 342, h: 323.69, left: 240, bottom: 12.5 }}
          initial={{ opacity: 0, y: 50 }}
          delay={0.7}
        />
        {/* Bottom-right ornament — fade up */}
        <AnimatedOrnament
          n="/images/ornaments-6.png"
          fit="object-right"
          box={{ w: 318, h: 343.69, left: 1362, bottom: 12.5 }}
          initial={{ opacity: 0, y: 50 }}
          delay={0.7}
        />
      </Stage>

      {/* ───────── Mobile ornaments + cards (390px design space) ───────── */}
      <Stage width={390} className="md:hidden">
        <AnimatedOrnament
          n="/images/ornaments-1.png"
          fit="object-left"
          box={{ w: 96, h: 96, left: 0, top: 72 }}
          initial={{ opacity: 0, x: -40 }}
          delay={0.3}
        />
        <AnimatedOrnament
          n="/images/ornaments-2.png"
          fit="object-right"
          box={{ w: 96, h: 96, right: 0, top: 64 }}
          initial={{ opacity: 0, x: 40 }}
          delay={0.3}
        />
        <AnimatedOrnament
          n="/images/ornaments-5.png"
          fit="object-left"
          box={{ w: 100, h: 96, left: 0, bottom: 120 }}
          initial={{ opacity: 0, y: 30 }}
          delay={0.55}
        />
        <AnimatedOrnament
          n="/images/ornaments-6.png"
          fit="object-right"
          box={{ w: 90, h: 96, right: 0, bottom: 34 }}
          initial={{ opacity: 0, y: 30 }}
          delay={0.55}
        />

        {/* Mobile floating cards */}
        <FloatingCard
          className="w-57.75"
          style={{ right: px(10), bottom: px(178) }}
          scale="calc(var(--s) * 0.62)"
          origin="bottom right"
          delay={0.85}
        >
          <ProgressContent />
        </FloatingCard>

        <FloatingCard
          style={{ left: px(10), bottom: px(22) }}
          scale="calc(var(--s) * 0.55)"
          origin="bottom left"
          delay={1.0}
        >
          <StudentsContent />
        </FloatingCard>
      </Stage>

      {/* ───────── Person + arch (one instance, scaled via --u and --k) ───────── */}
      <div
        className="absolute bottom-0 left-1/2 z-10"
        style={{
          width: `calc(var(--u) * ${k} * 1149)`,
          height: `calc(var(--u) * ${k} * 600)`,
          opacity: ready ? 1 : 0,
          transform: `translate3d(-50%, ${ready ? 0 : 60}px, 0)`,
          transition: `opacity 1.0s ${easing} 0.15s, transform 1.0s ${easing} 0.15s`,
          willChange: "opacity, transform",
        }}
      >
        <div className="absolute inset-0 bg-[url('/images/hero-person-bg.png')] bg-contain bg-bottom bg-no-repeat" />

        <Image
          alt="Person in the hero section"
          src="/images/hero-person.png"
          width={578}
          height={541}
          priority
          className="absolute left-1/2 -translate-x-1/2 object-contain object-center"
          style={{
            width: `calc(var(--u) * ${k} * 578)`,
            height: `calc(var(--u) * ${k} * 541)`,
            bottom: `calc(var(--u) * ${k} * -12)`,
          }}
        />

        {/* Tablet + desktop floating cards */}
        <FloatingCard
          className="w-54 max-md:hidden"
          style={{ left: px(240), bottom: px(311) }}
          scale="var(--s)"
          origin="bottom left"
          delay={0.75}
        >
          <UiUxContent />
        </FloatingCard>

        <FloatingCard
          className="w-57.75 max-md:hidden"
          style={{ left: px(692), bottom: px(242) }}
          scale="var(--s)"
          origin="bottom left"
          delay={0.9}
        >
          <ProgressContent />
        </FloatingCard>

        <FloatingCard
          className="max-md:hidden"
          style={{ left: px(160), bottom: px(68) }}
          scale="var(--s)"
          origin="bottom left"
          delay={1.05}
        >
          <StudentsContent />
        </FloatingCard>
      </div>
    </div>
  )
}
