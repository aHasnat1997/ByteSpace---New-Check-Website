import About from "./_sections/about"
import Courses from "./_sections/courses"
import Hero from "./_sections/hero"
import Testimonial from "./_sections/testimonial"
import BrandOne from "@/svgs/brand-1.svg"
import BrandTwo from "@/svgs/brand-2.svg"
import BrandThree from "@/svgs/brand-3.svg"
import BrandFour from "@/svgs/brand-4.svg"
import BrandFive from "@/svgs/brand-5.svg"
import Potential from "./_sections/potential"
import Reveal from "@/components/shared/reveal"

/**
 * The main Home Page for ByteSpace.
 * Assembles various sections including Hero, Brand Logos, Courses, About, Potential, and Testimonial.
 *
 * @returns {JSX.Element} The HomePage component.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="bg-neutral-50">
        <Reveal direction="fade-up" delay={0.1} threshold={0.1}>
          <div className="section-container flex flex-wrap items-center justify-center gap-6 py-8 md:gap-12 lg:justify-between md:py-20 [&_svg]:w-24 sm:[&_svg]:w-32 md:[&_svg]:w-40 [&_svg]:h-auto [&_svg]:shrink-0">
            <BrandOne />
            <BrandTwo />
            <BrandThree />
            <BrandFour />
            <BrandFive />
          </div>
        </Reveal>
      </section>
      <Courses />
      <About />
      <Potential />
      <Testimonial />
    </main>
  )
}
