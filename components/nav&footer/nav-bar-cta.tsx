"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ShoppingCart from "@/svgs/Style=Outlined-9.svg"

/**
 * Renders the Call-to-Action (CTA) section of the navigation bar, including links and a cart icon.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @returns {JSX.Element} The NavbarCta component.
 */
export default function NavbarCta({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn("items-center gap-6", className)}>
      {ctaLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("text-base leading-[19.2px] font-normal text-white", {
            "font-medium": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}

      <Link href="/cart" aria-label="Cart">
        <ShoppingCart className="h-6 w-6 text-neutral-50" />
      </Link>
    </div>
  )
}

export const ctaLinks = [
  { id: 1, name: "Sign In", href: "/sign-in" },
  { id: 2, name: "Join Us", href: "/sign-up" },
]
