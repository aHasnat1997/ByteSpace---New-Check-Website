import Image from "next/image"
import Link from "next/link"
import { BarChart3, Star } from "lucide-react"

type Instructor = {
  name: string
  image: string
}

type ProductCardProps = {
  image: string
  title: string
  instructor: string
  instructorHref?: string
  level: string
  lessons: number
  duration: string
  comments: number
  rating: number
  price: number
  instructors: Instructor[]
  href?: string
}

export default function ProductCard({
  image,
  title,
  instructor,
  instructorHref = "#",
  level,
  lessons,
  duration,
  comments,
  rating,
  price,
  instructors,
  href = "#",
}: ProductCardProps) {
  return (
    <article className="w-full max-w-105 rounded-[26px] border border-neutral-200 bg-white p-4">
      <Link href={href} className="block">
        <div className="relative h-55 overflow-hidden rounded-[18px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
            <span className="rounded-full bg-white/75 px-4 py-2 body-s backdrop-blur-sm">
              {lessons} Lessons
            </span>

            <span className="rounded-full bg-white/75 px-4 py-2 body-s backdrop-blur-sm">
              {duration}
            </span>

            <span className="rounded-full bg-white/75 px-4 py-2 body-s backdrop-blur-sm">
              {comments} Comments
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-3">
          <div>
            <h2 className="heading-xs">{title}</h2>

            <p className="mt-1 body-s text-neutral-500">
              by <span className="text-primary-500">{instructor}</span>
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1 body-m text-neutral-600">
            {rating.toFixed(1)}
            <Star className="size-5 fill-neutral-300 text-neutral-300" />
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-3 body-s text-neutral-600">
            <BarChart3 className="size-5 text-neutral-700" />
            {level}
          </span>

          <div className="flex items-center">
            {instructors.slice(0, 4).map((person, index) => (
              <Image
                key={person.name}
                src={person.image}
                alt={person.name}
                width={36}
                height={36}
                className="-ml-2 rounded-full border-2 border-white object-cover first:ml-0"
                style={{ zIndex: instructors.length - index }}
              />
            ))}

            <span className="ml-1 flex size-9 items-center justify-center rounded-full bg-secondary-400 body-s text-neutral-900">
              26+
            </span>
          </div>
        </div>

        <p className="mt-5">
          <span className="text-2xl font-bold text-primary-500">${price}</span>
          <span className="body-s text-neutral-500">/lifetime</span>
        </p>
      </Link>
    </article>
  )
}
