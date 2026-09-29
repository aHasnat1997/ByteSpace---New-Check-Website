import Image from "next/image"
import Ellipse from "@/svgs/Ellipse 8.svg"

export default function Hero() {
  return (
    <section className="section-container flex flex-col items-center justify-center gap-4 overflow-hidden text-center text-white">
      <h1 className="mt-[7.7rem] max-w-233.75 heading-l">
        Get Access to Hundreds Courses Available
      </h1>
      <p className="mt-8 max-w-233.75 body-l">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <div className="relative mt-13.5">
        <Image
          src="/images/Image-2.png"
          alt="Hero"
          width={578}
          height={541}
          className=""
        />
        {/* <Ellipse className="absolute top-0 right-0 size-287.25 text-[#CBFC01]" /> */}
      </div>
    </section>
  )
}
