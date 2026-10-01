import Details from "./details"
import Heading from "./heading"
import Ratings from "./ratings"
import VideoPlayer from "./video-player"

export default function Hero() {
  return (
    <section className="relative isolate bg-primary-700 grid-background">
      <div className="section-container pb-10 pt-24 md:pb-16 md:pt-32 lg:pt-[calc(var(--u,1px)*var(--k,1)*150)]">
        <Heading />
        <Ratings />
        <div className="relative mt-8 lg:mt-0 flex flex-col gap-8 lg:flex-row lg:items-start">
          <VideoPlayer />
          <Details />
        </div>
      </div>
    </section>
  )
}
