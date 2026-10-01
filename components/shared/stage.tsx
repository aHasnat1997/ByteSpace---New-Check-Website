import { ReactNode } from "react"

/**
 * Calculates a scaled pixel value based on a CSS variable.
 *
 * @param {number} n - The design pixel value.
 * @returns {string} The computed CSS calc string.
 */
const px = (n: number) => `calc(var(--u, 1px) * ${n})`

/**
 * Renders a centered stage area for relative positioning of elements.
 *
 * @param {Object} props - The component props.
 * @param {number} props.width - The design width of the stage.
 * @param {string} [props.className] - Optional additional classes.
 * @param {ReactNode} props.children - The elements to render inside the stage.
 * @returns {JSX.Element} The Stage component.
 */
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
