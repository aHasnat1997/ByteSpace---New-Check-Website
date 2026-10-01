import Search from "@/components/shared/search"
import HeroOrnaments from "../_components/hero-ornaments"

export default function Hero() {
  return (
    <section className="hero-scale relative isolate overflow-hidden bg-primary-800 grid-background">
      <div className="relative z-20 section-container pt-20 pb-[calc(var(--u,1px)*var(--k,1)*520)]">
        <div className="mx-auto mt-4 max-w-233.75 space-y-4 text-center md:mt-12.25 md:space-y-8">
          <h1
            className="heading-l text-white"
            style={{ fontSize: "clamp(1.75rem, 5.5vw, 72px)" }}
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p
            className="body-l text-white/80"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mx-auto mt-15 max-w-145.25">
            <Search inputType="global" />
          </div>
        </div>
      </div>

      <HeroOrnaments />
    </section>
  )
}
