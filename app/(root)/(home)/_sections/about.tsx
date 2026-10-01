import Image from "next/image"
import Checkbox from "@/svgs/Style=Filled-2.svg"

function FirstSections() {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-15.75 lg:flex-row`}
    >
      <div className="max-w-143.5 space-y-10">
        <h2 className="heading-m">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="body-l text-neutral-700">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="flex items-center gap-14">
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

      <div className="w-144.25">
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

function SecondSections() {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-15.75 lg:flex-row-reverse`}
    >
      <div className="max-w-143.5 space-y-10">
        <h2 className="heading-m">Create & Manage Courses Easily.</h2>
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

      <div className="w-144.25">
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

export default function About() {
  return (
    <section className="pt-30">
      <div
        style={{ backgroundImage: "url('/images/BgOne.png')" }}
        className="bg-cover bg-no-repeat py-30"
      >
        <div className="section-container space-y-18">
          <FirstSections />
          <SecondSections />
        </div>
      </div>
    </section>
  )
}
