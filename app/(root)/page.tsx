import About from "./_sections/about"
import Courses from "./_sections/courses"
import Hero from "./_sections/hero"
import Testimonial from "./_sections/testimonial"
import BrandOne from "@/svgs/brand-1.svg"
import BrandTwo from "@/svgs/brand-2.svg"
import BrandThree from "@/svgs/brand-3.svg"
import BrandFour from "@/svgs/brand-4.svg"
import BrandFive from "@/svgs/brand-5.svg"

export default function Page() {
  return (
    <>
      <section className="h-[105vh] overflow-hidden bg-primary-700 grid-background p-12">
        <Hero />
      </section>

      <section className="bg-neutral-50 py-6">
        <div className="section-container flex items-center justify-between gap-16 py-20">
          <BrandOne />
          <BrandTwo />
          <BrandThree />
          <BrandFour />
          <BrandFive />
        </div>
      </section>

      <section className="section-container pt-18">
        <Courses />
      </section>

      <section className="pt-30">
        <About />
      </section>

      <section className="h-122 bg-primary-700 grid-background"></section>

      <section>
        <Testimonial />
      </section>
    </>
  )
}
