"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

// ─── Shared helpers ───────────────────────────────────────────────────────────

const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/** Premium deceleration easing */
const ease = [0.21, 0.47, 0.32, 0.98] as const

type Box = {
  w: number
  h: number
  left?: number
  right?: number
  top?: number
  bottom?: number
}

const boxStyle = (b: Box): CSSProperties => ({
  position: "absolute",
  width: px(b.w),
  height: px(b.h),
  left: b.left !== undefined ? px(b.left) : undefined,
  right: b.right !== undefined ? px(b.right) : undefined,
  top: b.top !== undefined ? px(b.top) : undefined,
  bottom: b.bottom !== undefined ? px(b.bottom) : undefined,
})

// ─── Stage ───────────────────────────────────────────────────────────────────

function Stage({
  width,
  className = "",
  children,
}: {
  width: number
  className?: string
  children: React.ReactNode
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

// ─── Animated ornament ────────────────────────────────────────────────────────

/**
 * Scroll-triggered animated ornament.
 * Fades in from `initial` to resting position once the section enters the viewport.
 */
function AnimatedOrnament({
  n,
  box,
  fit,
  initial,
  delay = 0,
  inView,
}: {
  n: string
  box: Box
  fit: "object-left" | "object-right"
  initial: { opacity: number; x?: number; y?: number }
  delay?: number
  inView: boolean
}) {
  return (
    <motion.div
      style={boxStyle(box)}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.9, delay, ease }}
    >
      <Image
        src={n}
        alt="Potential section ornament"
        fill
        sizes="400px"
        className={`object-contain ${fit}`}
      />
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

/**
 * Decorative ornaments for the Potential section.
 * All ornaments reveal with a scroll-triggered fade/slide animation.
 *
 * @returns {JSX.Element} The PotentialOrnaments component.
 */
export default function PotentialOrnaments() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-1 overflow-hidden"
    >
      {/* ── Mobile only (below md) ── */}
      <Stage width={390} className="md:hidden">
        {/* Left side */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 110, h: 110, left: -20, top: -10 }}
          initial={{ opacity: 0, x: -40 }}
          delay={0.1}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 130, h: 130, left: -10, bottom: -30 }}
          initial={{ opacity: 0, x: -40 }}
          delay={0.25}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 90, h: 90, left: -20, bottom: 40 }}
          initial={{ opacity: 0, x: -30 }}
          delay={0.35}
          inView={inView}
        />
        {/* Right side */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 130, h: 130, right: -20, top: -10 }}
          initial={{ opacity: 0, x: 40 }}
          delay={0.1}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 110, h: 110, right: -10, bottom: -30 }}
          initial={{ opacity: 0, x: 40 }}
          delay={0.25}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 80, h: 80, right: 0, bottom: 60 }}
          initial={{ opacity: 0, x: 30 }}
          delay={0.35}
          inView={inView}
        />
      </Stage>

      {/* ── Tablet only (md to lg) ── */}
      <Stage width={768} className="hidden md:block lg:hidden">
        {/* Left side */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 160, h: 160, left: -30, top: -15 }}
          initial={{ opacity: 0, x: -50 }}
          delay={0.1}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 180, h: 180, left: -10, bottom: -50 }}
          initial={{ opacity: 0, x: -50 }}
          delay={0.25}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 120, h: 120, left: -40, bottom: 60 }}
          initial={{ opacity: 0, x: -40 }}
          delay={0.38}
          inView={inView}
        />
        {/* Right side */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 180, h: 180, right: -20, top: -10 }}
          initial={{ opacity: 0, x: 50 }}
          delay={0.1}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 160, h: 160, right: -10, bottom: -40 }}
          initial={{ opacity: 0, x: 50 }}
          delay={0.25}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 110, h: 110, right: -20, bottom: 60 }}
          initial={{ opacity: 0, x: 40 }}
          delay={0.38}
          inView={inView}
        />
      </Stage>

      {/* ── Desktop (lg and up) ── */}
      <Stage width={1920} className="hidden lg:block">
        {/* Left cluster — staggered slide from left */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 300, h: 300, left: 0, top: -30 }}
          initial={{ opacity: 0, x: -70 }}
          delay={0.05}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-4.png"
          fit="object-left"
          box={{ w: 175, h: 175, left: 180, top: 10 }}
          initial={{ opacity: 0, x: -50 }}
          delay={0.2}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 188, h: 188, left: 0, top: 230 }}
          initial={{ opacity: 0, x: -60 }}
          delay={0.3}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 342, h: 342, left: 40, bottom: -80 }}
          initial={{ opacity: 0, y: 60 }}
          delay={0.35}
          inView={inView}
        />
        {/* Right cluster — staggered slide from right */}
        <AnimatedOrnament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 188, h: 188, right: 170, top: 0 }}
          initial={{ opacity: 0, x: 50 }}
          delay={0.2}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 370, h: 370, right: 0, top: 10 }}
          initial={{ opacity: 0, x: 70 }}
          delay={0.05}
          inView={inView}
        />
        <AnimatedOrnament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 330, h: 330, right: 0, bottom: -70 }}
          initial={{ opacity: 0, y: 60 }}
          delay={0.35}
          inView={inView}
        />
      </Stage>
    </div>
  )
}
