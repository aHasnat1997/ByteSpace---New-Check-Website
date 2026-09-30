import Hero from "@/components/home/hero"
import ProductCard from "@/components/shared/product-card"
import BrandOne from "@/svgs/brand-1.svg"
import BrandTwo from "@/svgs/brand-2.svg"
import BrandThree from "@/svgs/brand-3.svg"
import BrandFour from "@/svgs/brand-4.svg"
import BrandFive from "@/svgs/brand-5.svg"

export default function Page() {
  const course = {
    image: "/images/Frame-1.png",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    instructorHref: "/instructors/purepearl-studio",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    href: "/courses/learn-figma-from-basic",
    instructors: [
      { name: "Instructor 1", image: "/images/Image.png" },
      { name: "Instructor 2", image: "/images/Image-1.png" },
      { name: "Instructor 3", image: "/images/Image-2.png" },
    ],
  }
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

      <div className="section-container py-6">
        <ProductCard payload={course} />
      </div>
    </>
  )
}
