import Search from "@/components/shared/search"

export default function CoursesPage() {
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
    </main>
  )
}
