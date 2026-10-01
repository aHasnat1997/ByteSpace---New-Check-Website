import Image from "next/image"

/**
 * The Testimonial section.
 * Displays user quotes and feedback in a grid format.
 *
 * @returns {JSX.Element} The Testimonial section component.
 */
export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah M.",
      title: "Enthusiastic Learner",
      image: "/images/Ellipse.png",
      quote:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      name: "James L.",
      title: "Lifelong Learner",
      image: "/images/Ellipse-1.png",
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      name: "Alex B.",
      title: "Inspired Creator",
      image: "/images/Ellipse-2.png",
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ]

  return (
    <section
      style={{ backgroundImage: "url('/images/BgTwo.png')" }}
      className="bg-cover bg-no-repeat pt-10 pb-8 md:pt-18.5 md:pb-14.25"
    >
      <div className="section-container">
        <div className="flex w-full flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-10.75">
          <h2
            className="mx-auto max-w-144.25 heading-m text-center md:mx-0 md:text-left"
            style={{ fontSize: "clamp(1.5rem, 4vw, 44px)" }}
          >
            Discover What Our Community Is Saying
          </h2>

          <p className="mx-auto max-w-145 body-l text-neutral-700 text-center md:mx-0 md:text-left" style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-18">
          <div className="grid grid-cols-1 gap-10.25 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="space-y-6 rounded-[24px] bg-white p-6"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-full"
                />
                <div className="">
                  <h3 className="heading-xs">{testimonial.name}</h3>
                  <p className="body-l text-primary">{testimonial.title}</p>
                </div>
                <p className="body-l text-neutral-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
