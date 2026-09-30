import About from "@/components/home/about"
import Courses from "@/components/home/courses"
import Hero from "@/components/home/hero"
import Testimonial from "@/components/home/testimonial"
import BrandOne from "@/svgs/brand-1.svg"
import BrandTwo from "@/svgs/brand-2.svg"
import BrandThree from "@/svgs/brand-3.svg"
import BrandFour from "@/svgs/brand-4.svg"
import BrandFive from "@/svgs/brand-5.svg"

export default function Page() {
  return (
    <>
      <div className="h-[105vh] overflow-hidden bg-primary-700 grid-background p-12">
        <Hero />
      </div>

      <div className="bg-neutral-50 py-6">
        <div className="section-container flex items-center justify-between gap-16 py-20">
          <BrandOne />
          <BrandTwo />
          <BrandThree />
          <BrandFour />
          <BrandFive />
        </div>
      </div>

      <div className="section-container pt-18">
        <Courses />
      </div>

      <div className="pt-30">
        <About />
      </div>

      <div className="h-122 bg-primary-700 grid-background"></div>

      <div>
        <Testimonial />
      </div>
    </>
  )
}
