"use client"

import { useState } from "react"
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs"
import ProductCard from "@/components/shared/product-card"
import COURSES from "@/data/courses.json"
import CATEGORIES from "@/data/categories.json"

import Design from "@/svgs/Frame 5.svg"
import Development from "@/svgs/Frame 5-1.svg"
import ITSoftware from "@/svgs/Frame 5-2.svg"
import Business from "@/svgs/Frame 5-3.svg"
import Marketing from "@/svgs/Frame 5-4.svg"
import Photography from "@/svgs/Frame 5-5.svg"

/**
 * The Courses section on the home page.
 * Displays a tabbed interface of course categories and a grid of featured course categories.
 *
 * @returns {JSX.Element} The Courses section component.
 */
export default function Courses() {
  const [showAllCategories, setShowAllCategories] = useState(false)
  const visibleCategories = showAllCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 18)

  const featuredCategories = [
    {
      icon: Design,
      title: "Design",
    },
    {
      icon: Development,
      title: "Development",
    },
    {
      icon: ITSoftware,
      title: "IT & Software",
    },
    {
      icon: Business,
      title: "Business",
    },
    {
      icon: Marketing,
      title: "Marketing",
    },
    {
      icon: Photography,
      title: "Photography",
    },
  ]

  return (
    <section className="section-container pt-10 md:pt-18">
      <div>
        <div className="mx-auto max-w-242.75 space-y-4 text-center">
          <h2
            className="mx-auto max-w-147 heading-m"
            style={{ fontSize: "clamp(1.5rem, 4vw, 44px)" }}
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p
            className="body-l text-neutral-400"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          >
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="my-10.5 w-full">
          <Tabs defaultValue={CATEGORIES[0].value}>
            <TabsList className="mx-auto mb-19.25 flex w-full max-w-271.5 flex-wrap justify-center gap-4">
              {visibleCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.name}
                </TabsTrigger>
              ))}
              <button
                type="button"
                className="px-1 py-3 label-m whitespace-nowrap text-blue-700 transition-colors hover:text-blue-900 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                aria-expanded={showAllCategories}
                onClick={() =>
                  setShowAllCategories((isExpanded) => !isExpanded)
                }
              >
                {showAllCategories ? "- Less" : "+ More"}
              </button>
            </TabsList>
            <TabsContents>
              {CATEGORIES.map((category) => (
                <TabsContent key={category.value} value={category.value}>
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {COURSES.slice(0, 6).map((course, index) => (
                      <ProductCard
                        key={`${course.href}-${index}`}
                        payload={course}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </TabsContents>
          </Tabs>
        </div>
      </div>

      <div className="mt-10 md:mt-18">
        <div className="mx-auto max-w-242.75 space-y-4 text-center">
          <h2
            className="heading-s"
            style={{ fontSize: "clamp(1.25rem, 3.5vw, 36px)" }}
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p
            className="body-l text-neutral-400"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:flex lg:items-center lg:justify-center lg:gap-10">
          {featuredCategories.map((category) => (
            <div
              key={category.title}
              className="flex h-36 flex-col items-center justify-center gap-3 rounded-[24px] border sm:h-41.75 sm:w-full lg:size-41.75 lg:shrink-0"
            >
              <category.icon />
              <h3 className="label-m sm:label-xl">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
