import Image from "next/image"
import Link from "next/link"

/**
 * Renders the ByteSpace logo.
 *
 * @param {Object} props - The component props.
 * @param {"light" | "dark"} [props.logoMode] - The color mode of the logo text.
 * @returns {JSX.Element} The Logo component.
 */
export default function Logo({ logoMode }: { logoMode?: "light" | "dark" }) {
  return (
    <Link href="/">
      <div className="flex items-baseline gap-2">
        <Image src="/logo.svg" alt="logo" height={31.5} width={28.875} />
        <p
          className={`font-clash-display text-[24px] font-bold ${logoMode === "light" ? "text-white" : "text-black"}`}
        >
          ByteSpace
        </p>
      </div>
    </Link>
  )
}
