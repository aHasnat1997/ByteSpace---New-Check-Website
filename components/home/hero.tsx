import Image from "next/image"
import Ellipse from "@/svgs/Ellipse 8.svg"
import Search from "../shared/search"

export default function Hero() {
  return (
    <section className="relative section-container flex flex-col items-center justify-center gap-4 overflow-hidden text-center text-white">
      <div>
        <h1 className="mt-[7.7rem] max-w-233.75 heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-8 max-w-233.75 body-l">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mx-auto mt-15 max-w-145.25">
          <Search inputType="global" />
        </div>
      </div>

      <Ellipse className="absolute right-50 -bottom-145 size-287.25 text-[#CBFC01]" />

      <div className="z-20">
        <Image
          src="/images/Image-2.png"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full max-w-169.5 rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
