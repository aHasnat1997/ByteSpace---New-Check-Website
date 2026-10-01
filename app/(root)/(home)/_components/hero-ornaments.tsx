import Ornament from "@/components/shared/ornament"
import Stage from "@/components/shared/stage"
import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import StarIcon from "@/svgs/Style=Outlined-8.svg"

const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/** White card, laid out at its natural size and scaled with the hero. */
function FloatingCard({
  className = "",
  style,
  scale,
  origin,
  children,
}: {
  className?: string
  style: CSSProperties
  scale: string
  origin: string
  children: ReactNode
}) {
  return (
    <div
      className={`absolute rounded-[16px] bg-white p-4 backdrop-blur-[10px] ${className}`}
      style={{
        ...style,
        transform: `scale(${scale})`,
        transformOrigin: origin,
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
  return (
    <>
      <p className="body-m font-medium text-neutral-950">Learning Progress</p>
      <p className="font-heading text-[48px] leading-none font-semibold text-neutral-950">
        55%
      </p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-200">
        <div className="h-full w-[55%] rounded-full bg-secondary" />
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

  return (
    <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
      {/* ───────── Tablet + desktop ornaments (1920px design space) ───────── */}
      <Stage width={1920} className="max-md:hidden">
        <Ornament
          n="/images/ornaments-1.png"
          fit="object-left"
          box={{ w: 386.79, h: 386.79, left: 0, top: 221 }}
        />
        <Ornament
          n="/images/ornaments-2.png"
          fit="object-right"
          box={{ w: 386.79, h: 386.79, right: 0, top: 221 }}
        />
        <Ornament
          n="/images/ornaments-3.png"
          fit="object-left"
          box={{ w: 175.81, h: 175.81, left: 192, top: 492 }}
        />
        <Ornament
          n="/images/ornaments-4.png"
          fit="object-right"
          box={{ w: 175.81, h: 175.81, left: 1552, top: 472 }}
        />
        <Ornament
          n="/images/ornaments-5.png"
          fit="object-left"
          box={{ w: 342, h: 323.69, left: 240, bottom: 12.5 }}
        />
        <Ornament
          n="/images/ornaments-6.png"
          fit="object-right"
          box={{ w: 318, h: 343.69, left: 1362, bottom: 12.5 }}
        />
      </Stage>

      {/* ───────── Mobile ornaments + cards (390px design space) ───────── */}
      <Stage width={390} className="md:hidden">
        <Ornament
          n="/images/ornaments-1.png"
          fit="object-left"
          box={{ w: 96, h: 96, left: 0, top: 72 }}
        />
        <Ornament
          n="/images/ornaments-2.png"
          fit="object-right"
          box={{ w: 96, h: 96, right: 0, top: 64 }}
        />
        <Ornament
          n="/images/ornaments-5.png"
          fit="object-left"
          box={{ w: 100, h: 96, left: 0, bottom: 120 }}
        />
        <Ornament
          n="/images/ornaments-6.png"
          fit="object-right"
          box={{ w: 90, h: 96, right: 0, bottom: 34 }}
        />

        <FloatingCard
          className="w-57.75"
          style={{ right: px(10), bottom: px(178) }}
          scale="calc(var(--s) * 0.62)"
          origin="bottom right"
        >
          <ProgressContent />
        </FloatingCard>

        <FloatingCard
          style={{ left: px(10), bottom: px(22) }}
          scale="calc(var(--s) * 0.55)"
          origin="bottom left"
        >
          <StudentsContent />
        </FloatingCard>
      </Stage>

      {/* ───────── Person + arch (one instance, scaled via --u and --k) ───────── */}
      <div
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
        style={{
          width: `calc(var(--u) * ${k} * 1149)`,
          height: `calc(var(--u) * ${k} * 600)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('/images/hero-person-bg.png')] bg-contain bg-bottom bg-no-repeat" />

        <Image
          alt="Person in the hero section"
          src="/images/hero-person.png"
          width={578}
          height={541}
          priority
          className="absolute left-1/2 translate-x-[-50%] object-contain object-center"
          style={{
            width: `calc(var(--u) * ${k} * 578)`,
            height: `calc(var(--u) * ${k} * 541)`,
            bottom: `calc(var(--u) * ${k} * -12)`,
          }}
        />

        {/* Tablet + desktop cards (positions match your Figma) */}
        <FloatingCard
          className="w-54 max-md:hidden"
          style={{ left: px(240), bottom: px(311) }}
          scale="var(--s)"
          origin="bottom left"
        >
          <UiUxContent />
        </FloatingCard>

        <FloatingCard
          className="w-57.75 max-md:hidden"
          style={{ left: px(692), bottom: px(242) }}
          scale="var(--s)"
          origin="bottom left"
        >
          <ProgressContent />
        </FloatingCard>

        <FloatingCard
          className="max-md:hidden"
          style={{ left: px(160), bottom: px(68) }}
          scale="var(--s)"
          origin="bottom left"
        >
          <StudentsContent />
        </FloatingCard>
      </div>
    </div>
  )
}
