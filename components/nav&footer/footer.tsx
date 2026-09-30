import Link from "next/link"
import Logo from "../shared/logo"
import { Button } from "../animate-ui/components/buttons/button"
import { Field, FieldError, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import Search from "../shared/search"

const footerColumns = [
  {
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses/business" },
      { label: "IT", href: "/courses/it" },
      { label: "Design", href: "/courses/design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/courses/development" },
      { label: "Marketing", href: "/courses/marketing" },
      { label: "Photography", href: "/courses/photography" },
      { label: "Finance", href: "/courses/finance" },
      { label: "Sport", href: "/courses/sport" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "/creator" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookie-settings" },
]

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="section-container py-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)] md:gap-20">
          <div>
            <div className="w-fit">
              <Logo logoMode="dark" />
            </div>

            <p className="mt-4 body-s">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-11 max-w-111.25">
              <Search inputType="footer" />
            </div>

            <p className="mt-6 max-w-111.25 body-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-5">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="body-s transition-colors hover:text-secondary-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-28 flex flex-col gap-6 border-t border-neutral-200 pt-6 body-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <nav aria-label="Legal navigation" className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="body-xs transition-colors hover:text-secondary-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
