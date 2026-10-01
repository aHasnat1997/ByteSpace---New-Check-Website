"use client"

import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

/**
 * Renders the desktop navigation menu with links defined in `navLinks`.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @returns {JSX.Element} The NavMenu component.
 */
export default function NavMenu({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("items-center gap-6", className)}
      aria-label="Main navigation"
    >
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("text-base leading-[19.2px] font-normal text-white", {
            "-mt-1.5 font-medium": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Courses", href: "/courses" },
  { id: 3, name: "Creators", href: "/creators" },
]
