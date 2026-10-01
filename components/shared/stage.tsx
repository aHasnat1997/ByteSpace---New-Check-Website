import { ReactNode } from "react"

/** 1 design px -> scaled px. `--u` is set on the hero section (globals.css). */
const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/** A design-sized coordinate space, centered. Everything inside uses px(). */
export default function Stage({
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
