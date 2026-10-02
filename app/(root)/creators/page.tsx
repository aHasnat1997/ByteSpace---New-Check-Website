import FilterButtons from "@/components/shared/filter-buttons"
import ProductCard from "@/components/shared/product-card"
import { Button } from "@/components/animate-ui/components/buttons/button"
import COURSES from "@/data/courses.json"
import Image from "next/image"
import Reveal from "@/components/shared/reveal"

const creator = {
  name: "PurePearl Studio",
  designation: "Passionate UI/UX, Web designer",
  bio: "<p>Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p><p>I've delved into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>",
  image: "/images/Image.png",
  products: 3,
  followers: 12,
}

export default function CreatorsPage() {
  return (
    <main>
      {/* ── Creator profile header ── */}
      <section className="min-h-[300px] bg-primary-800 grid-background md:h-148">
        <div className="section-container w-full pb-10 pt-28 text-white md:pt-43">
          {/* Avatar + name row */}
          <Reveal direction="fade-up" delay={0.1} duration={0.7} animateOnMount>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Image
                src={creator.image}
                alt={creator.name}
                width={80}
                height={80}
                className="size-20 sm:size-24"
              />

              <div>
                <div className="flex flex-wrap items-start gap-2">
                  <h3
                    className="heading-s"
                    style={{ fontSize: "clamp(1.25rem, 3.5vw, 36px)" }}
                  >
                    {creator.name}
                  </h3>
                  <p className="w-fit rounded-full bg-secondary-400 px-4 py-1.5 label-m text-black sm:px-6 sm:py-2">
                    Creator
                  </p>
                </div>
                <p
                  className="mt-2 body-l"
                  style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
                >
                  {creator.designation}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal direction="fade-up" delay={0.25} duration={0.65} animateOnMount>
            <div className="mt-6 md:mt-10">
              {creator.bio.split("</p>").map((paragraph, index) => (
                <p
                  key={index}
                  className="body-l text-neutral-50"
                  style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
                >
                  {paragraph.replace("<p>", "")}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Stats + follow button */}
          <Reveal direction="fade-up" delay={0.4} duration={0.6} animateOnMount>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 md:mt-10">
              <div className="flex items-center gap-3 sm:gap-6">
                <Button
                  type="button"
                  size="lg"
                  className="bg-white text-neutral-800 hover:bg-neutral-50"
                >
                  <span className="text-primary-600">{creator.products}</span>
                  Products
                </Button>
                <Button
                  type="button"
                  size="lg"
                  className="bg-white text-neutral-800 hover:bg-neutral-50"
                >
                  <span className="text-primary-600">{creator.followers}</span>
                  Followers
                </Button>
              </div>

              <Button
                type="button"
                size="lg"
                className="ml-auto bg-secondary-400 text-neutral-950 hover:bg-secondary-300"
              >
                Follow
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Creator's courses ── */}
      <section className="section-container pt-15.5 pb-15.25">
        <FilterButtons />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((course, index) => (
            <Reveal
              key={`${course.href}-${index}`}
              direction="fade-up"
              delay={(index % 3) * 0.07}
              duration={0.5}
              threshold={0}
            >
              <ProductCard payload={course} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
