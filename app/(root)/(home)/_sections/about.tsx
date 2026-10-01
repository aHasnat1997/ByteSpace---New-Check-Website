import Image from "next/image"
import Checkbox from "@/svgs/Style=Filled-2.svg"

/**
 * Renders the first part of the About section, highlighting user and course statistics.
 *
 * @returns {JSX.Element} The FirstSections component.
 */
function FirstSections() {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-15.75`}
    >
      <div className="w-full max-w-143.5 space-y-8 md:space-y-10">
        <h2
          className="heading-m"
          style={{ fontSize: "clamp(1.5rem, 4vw, 44px)" }}
        >
          Your Path to Professional Growth Starts Here!
        </h2>
        <p
          className="body-l text-neutral-700"
          style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
        >
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="flex flex-wrap items-center gap-8 sm:gap-14">
          <div>
            <h3 className="display-xs text-primary">12K</h3>
            <p className="body-l text-neutral-700">Students</p>
          </div>

          <div>
            <h3 className="display-xs text-primary">70+</h3>
            <p className="body-l text-neutral-700">Courses</p>
          </div>

          <div>
            <h3 className="display-xs text-primary">16</h3>
            <p className="body-l text-neutral-700">Creators</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-144.25">
        <Image
          src="/images/Frame 11.png"
          alt="About Image"
          width={577}
          height={540}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

/**
 * Renders the second part of the About section, focusing on course creation features.
 *
 * @returns {JSX.Element} The SecondSections component.
 */
function SecondSections() {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-10 lg:flex-row-reverse lg:gap-15.75`}
    >
      <div className="w-full max-w-143.5 space-y-8 md:space-y-10">
        <h2
          className="heading-m"
          style={{ fontSize: "clamp(1.5rem, 4vw, 44px)" }}
        >
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="body-l text-neutral-700">
          <span className="font-bold">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of
          educational courses.
        </p>
        <ul className="space-y-4 label-l">
          {[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-144.25">
        <Image
          src="/images/Frame 12.png"
          alt="About Image"
          width={577}
          height={540}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

/**
 * The complete About section combining the first and second descriptive parts.
 *
 * @returns {JSX.Element} The About section component.
 */
export default function About() {
  return (
    <section className="pt-12 md:pt-20 lg:pt-30">
      <div
        style={{ backgroundImage: "url('/images/BgOne.png')" }}
        className="bg-cover bg-no-repeat py-12 md:py-20 lg:py-30"
      >
        <div className="section-container space-y-12 md:space-y-16 lg:space-y-18">
          <FirstSections />
          <SecondSections />
        </div>
      </div>
    </section>
  )
}
