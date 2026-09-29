import ProductCard from "@/components/shared/product-card"

export default function Page() {
  const course = {
    image: "/images/Frame-1.png",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    price: 25,
    instructors: [
      { name: "Instructor 1", image: "/images/Image.png" },
      { name: "Instructor 2", image: "/images/Image-1.png" },
      { name: "Instructor 3", image: "/images/Image-2.png" },
    ],
  }
  return (
    <>
      <div className="h-screen bg-primary-700 grid-background p-12"></div>

      <div className="section-container py-6">
        <ProductCard {...course} />
      </div>
    </>
  )
}
