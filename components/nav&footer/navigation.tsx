import Link from "next/link"
import Logo from "../shared/logo"
import ShoppingCart from "@/svgs/Style=Outlined-9.svg"

export default function Navigation() {
  const navigationLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Courses",
      href: "/courses",
    },
    {
      title: "Creators",
      href: "/creators",
    },
  ]

  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      <div className="section-container flex items-center justify-between pt-8.75 pb-11.75">
        <Logo logoMode="light" />

        <ul className="mt-6 flex items-center gap-7">
          {navigationLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="font-satoshi text-[16px] font-medium text-white duration-300 hover:-mt-1 hover:font-bold"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex items-center gap-7">
          <li>
            <Link
              href="/sign-in"
              className="font-satoshi text-[16px] font-medium text-white duration-300 hover:font-bold"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/join-us"
              className="font-satoshi text-[16px] font-medium text-white duration-300 hover:font-bold"
            >
              Join Us
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="font-satoshi text-[16px] font-medium text-white duration-300 hover:font-bold"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
