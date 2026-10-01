import { Button } from "@/components/animate-ui/components/buttons/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ResourcesIcon from "@/svgs/resources.svg"
import VideoIcon from "@/svgs/video.svg"
import CertificateIcon from "@/svgs/certificate.svg"
import ConsultationIcon from "@/svgs/consultation.svg"

export default function Details() {
  const lessons = [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ]

  return (
    <div className="absolute top-0 right-0 w-full max-w-105 rounded-[24px] border border-neutral-200 bg-white p-10">
      <h2 className="heading-xs font-heading">112 Lessons (24 hours)</h2>

      <ul className="mt-6 flex flex-col gap-4">
        {lessons.map((lesson, index) => {
          const formattedNumber = String(index + 1).padStart(2, "0")

          return (
            <li
              key={index}
              className="flex items-start justify-between space-x-2 label-m"
            >
              <div className="flex items-start space-x-3">
                <span className="font-medium">{formattedNumber}.</span>
                <span className="max-w-48.5 text-wrap">{lesson.title}</span>
              </div>

              <span className="body-m text-primary-800">{lesson.duration}</span>
            </li>
          )
        })}

        <li className="body-m text-neutral-700">99 more videos</li>
      </ul>

      <p className="mt-6 body-m text-neutral-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <h4 className="my-6 heading-s text-primary-800">
        $25<span className="body-m text-neutral-700">/lifetime</span>
      </h4>

      <Button variant="secondary" className="w-full">
        Enroll Now
      </Button>

      <h4 className="my-6 heading-xs text-neutral-950">This course include</h4>

      <ul className="my-6 space-y-3 border-b pb-6">
        <li className="flex items-center gap-2 body-m text-neutral-700">
          <ResourcesIcon />
          <span>Learning Resources</span>
        </li>

        <li className="flex items-center gap-2 body-m text-neutral-700">
          <VideoIcon />
          <span>Quality Lesson Videos</span>
        </li>

        <li className="flex items-center gap-2 body-m text-neutral-700">
          <CertificateIcon />
          <span>Certificate of Completion</span>
        </li>

        <li className="flex items-center gap-2 body-m text-neutral-700">
          <ConsultationIcon />
          <span>Private Consultation</span>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <Avatar className="size-13">
          <AvatarImage src="/images/course-details/profile.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="label-l text-neutral-950">PurePearl Studio</p>
          <p className="body-m text-neutral-700">Professional Creator</p>
        </div>
      </div>

      <p className="my-6 body-m text-neutral-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <button className="cursor-pointer rounded-full border border-neutral-200 px-4 py-2 label-m text-neutral-700">
        See Full Profile
      </button>
    </div>
  )
}
