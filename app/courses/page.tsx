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

export default function CoursesPage() {
  const visibleCategories = CATEGORIES.filter((category) => category.isFeatured)

  return (
    <main>
      <section className="flex h-90 items-center justify-center bg-primary-800 grid-background p-12">
        <div className="mx-auto mt-25 max-w-156 text-center text-white">
          <h2 className="heading-s">Find Your Next Course</h2>
          <div className="mt-8 w-156">
            <Search inputType="courses" />
          </div>
        </div>
      </section>

      <section className="section-container pt-18 pb-18.25">
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

          <div className="mt-18">
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  )
}
