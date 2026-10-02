import Search from "@/components/shared/search"
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
import Pagination from "./_components/pagination"
import FilterButtons from "@/components/shared/filter-buttons"
import Reveal from "@/components/shared/reveal"

export default function CoursesPage() {
  const visibleCategories = CATEGORIES.filter((category) => category.isFeatured)

  return (
    <main>
      {/* ── Page header ── */}
      <section className="flex min-h-[200px] items-center justify-center bg-primary-800 grid-background px-4 py-12 pt-28 md:h-90 md:p-12">
        <div className="mx-auto w-full max-w-156 text-center text-white md:mt-25">
          <Reveal direction="fade-up" delay={0.1} duration={0.7} animateOnMount>
            <h2
              className="heading-s"
              style={{ fontSize: "clamp(1.25rem, 3.5vw, 36px)" }}
            >
              Find Your Next Course
            </h2>
          </Reveal>
          <Reveal direction="fade-up" delay={0.25} duration={0.7} animateOnMount>
            <div className="mt-6 w-full md:mt-8">
              <Search inputType="courses" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Courses grid ── */}
      <section className="section-container pt-18 pb-18.25">
        {/* Filter + tabs are always visible — no Reveal wrapper here so
            content below the fold never starts invisible */}
        <FilterButtons />

        <div className="mt-8">
          <div className="w-full">
            <Tabs defaultValue={CATEGORIES[0].value}>
              <TabsList className="mx-auto mb-19.25 flex w-full flex-wrap justify-center gap-4">
                {visibleCategories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContents>
                {CATEGORIES.map((category) => (
                  <TabsContent key={category.value} value={category.value}>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                      {COURSES.slice(0, 18).map((course, index) => (
                        /* threshold=0 → fires the instant any pixel enters view,
                           so cards animate in as soon as they're reachable */
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
                  </TabsContent>
                ))}
              </TabsContents>
            </Tabs>
          </div>

          <div className="mt-18">
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  )
}
