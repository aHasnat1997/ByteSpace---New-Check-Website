import Details from "./details"
import Heading from "./heading"
import Ratings from "./ratings"
import VideoPlayer from "./video-player"
import Reveal from "@/components/shared/reveal"

export default function Hero() {
  return (
    <section className="relative isolate bg-primary-700 grid-background">
      <div className="section-container pb-10 pt-24 md:pb-16 md:pt-32 lg:pt-[calc(var(--u,1px)*var(--k,1)*150)]">
        <Reveal direction="fade-up" delay={0.1} duration={0.7} animateOnMount>
          <Heading />
        </Reveal>
        <Reveal direction="fade-up" delay={0.22} duration={0.65} animateOnMount>
          <Ratings />
        </Reveal>
        <div className="relative mt-8 lg:mt-0 flex flex-col gap-8 lg:flex-row lg:items-start">
          <Reveal direction="fade-up" delay={0.35} duration={0.7} className="w-full lg:mt-14.75 lg:max-w-180" animateOnMount>
            <VideoPlayer />
          </Reveal>
          <Details />
        </div>
      </div>
    </section>
  )
}
