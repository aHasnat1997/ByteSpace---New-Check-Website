import Details from "./details"
import Heading from "./heading"
import Ratings from "./ratings"
import VideoPlayer from "./video-player"

export default function Hero() {
  return (
    <section className="h-[957px] relative isolate bg-primary-700 grid-background">
      <div className="section-container py-[calc(var(--u,1px)*var(--k,1)*100)] md:pt-[calc(var(--u,1px)*var(--k,1)*150)]">
        <Heading />
        <Ratings />
        <div className="relative">
          <VideoPlayer />
          <Details />
        </div>
      </div>
    </section>
  )
}
