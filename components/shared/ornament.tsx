import Image from "next/image"
import type { CSSProperties } from "react"

/** 1 design px -> scaled px. `--u` is set on the hero section (globals.css). */
const px = (n: number) => `calc(var(--u, 1px) * ${n})`

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

export default function Ornament({
  n,
  box,
  fit,
}: {
  n: string
  box: Box
  fit: "object-left" | "object-right"
}) {
  return (
    <div className="absolute" style={boxStyle(box)}>
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
