import PlayIcon from "@/svgs/play.svg"

export default function VideoPlayer() {
  return (
    <div className="mt-14.75 min-h-119.75 w-full max-w-180">
      <div className="relative aspect-video h-full w-full overflow-hidden rounded-[24px] bg-neutral-950">
        <video
          poster="/images/Frame-6.png"
          className="h-full w-full rounded-[24px] object-cover"
        >
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Play Button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-[24px] bg-black/10 p-4 outline-0 backdrop-blur-xl">
          <PlayIcon />
        </button>
      </div>
    </div>
  )
}
