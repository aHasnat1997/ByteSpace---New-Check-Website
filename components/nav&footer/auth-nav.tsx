import Logo from "../shared/logo";


export default function AuthHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4 sm:pt-6 md:pt-7 lg:pt-8.75 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
      <nav className="section-container flex items-center justify-between">
        <Logo logoMode="light" />
      </nav>
    </header>
  )
}
