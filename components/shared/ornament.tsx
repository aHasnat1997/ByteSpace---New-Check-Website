import Image from "next/image"
import type { CSSProperties } from "react"

/**
 * Calculates a scaled pixel value based on a CSS variable.
 *
 * @param {number} n - The design pixel value.
 * @returns {string} The computed CSS calc string.
 */
const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/**
 * Defines the boundaries and positioning of a Box.
 *
 * @typedef {Object} Box
 * @property {number} w - The width of the box.
 * @property {number} h - The height of the box.
 * @property {number} [left] - Left offset.
 * @property {number} [right] - Right offset.
 * @property {number} [top] - Top offset.
 * @property {number} [bottom] - Bottom offset.
 */
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
 * Renders an ornamental decorative image positioned absolutely.
 *
 * @param {Object} props - The component props.
 * @param {string} props.n - The image source URL.
 * @param {Box} props.box - The dimensions and positioning of the ornament.
 * @param {"object-left" | "object-right"} props.fit - The CSS object-fit alignment.
 * @returns {JSX.Element} The Ornament component.
 */
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
