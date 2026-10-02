import Search from "@/components/shared/search"
import HeroOrnaments from "../_components/hero-ornaments"
import Reveal from "@/components/shared/reveal"

/**
 * The Hero section for the home page.
 * Displays the main headline, description, global search bar, and decorative ornaments.
 *
 * @returns {JSX.Element} The Hero section component.
 */
export default function Hero() {
  return (
    <section className="hero-scale relative isolate overflow-hidden bg-primary-800 grid-background">
      <div className="relative z-20 section-container pt-20 pb-[calc(var(--u,1px)*var(--k,1)*520)]">
        <div className="mx-auto mt-4 max-w-233.75 space-y-4 text-center md:mt-12.25 md:space-y-8">
          <Reveal direction="fade-up" delay={0.1} duration={0.7} animateOnMount>
            <h1
              className="heading-l text-white"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 72px)" }}
            >
              Get Access to Hundreds Courses Available
            </h1>
          </Reveal>
          <Reveal direction="fade-up" delay={0.25} duration={0.7} animateOnMount>
            <p
              className="body-l text-white/80"
              style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
            >
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </Reveal>

          <Reveal direction="fade-up" delay={0.4} duration={0.7} animateOnMount>
            <div className="mx-auto mt-8 w-full max-w-full px-2 md:mt-15 md:max-w-145.25 md:px-0">
              <Search inputType="global" />
            </div>
          </Reveal>
        </div>
      </div>

      <HeroOrnaments />
    </section>
  )
}
