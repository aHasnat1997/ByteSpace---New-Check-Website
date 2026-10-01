import { Button } from "@/components/animate-ui/components/buttons/button"
import Footer from "@/components/nav&footer/footer"
import Navigation from "@/components/nav&footer/navigation"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function NotFound() {
  return (
    <>
      <Navigation />
      <section
        className={`${poppins.className} flex min-h-screen flex-col items-center justify-center bg-primary-700 grid-background px-4 py-20`}
      >
        <div className="relative flex w-full flex-col items-center justify-center text-white">
          <h1 className="select-none bg-[linear-gradient(to_bottom,#D4FB20_0%,#D4FB20F5_25%,#D4FB20CF_50%,#D4FB209C_68%,#FFFFFF00_100%)] bg-clip-text text-[clamp(120px,30vw,480px)] font-bold leading-[0.8] text-transparent">
            404
          </h1>

          <div className="relative z-20 -mt-[clamp(10px,4vw,60px)] flex flex-col items-center gap-4 text-center">
            <h2 className="heading-xs md:heading-m lg:heading-l">
              The page you are looking <br className="hidden sm:block" /> for doesn&apos;t exist
            </h2>
            <p className="mt-4 sm:mt-8 body-l">
              Try using the correct URL or go back to the homepage.
            </p>

            <Link href="/">
              <Button variant="secondary" size="lg" className="mt-4 sm:mt-8">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
