import MobileMenu from "./mobile-menu"
import NavbarCta from "./nav-bar-cta"
import NavMenu from "./nav-menu"
import Logo from "../shared/logo"

/**
 * Renders the main navigation header for the application.
 * Incorporates the logo, desktop navigation menu, CTA buttons, and a mobile menu.
 *
 * @returns {JSX.Element} The Navigation component.
 */
export default function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-container flex items-center justify-between py-5 md:py-6 lg:pt-8.75 lg:pb-11.75">
        <Logo logoMode="light" />

        <NavMenu className="hidden lg:flex" />
        <NavbarCta className="hidden lg:flex" />
        <MobileMenu />
      </div>
    </header>
  )
}
