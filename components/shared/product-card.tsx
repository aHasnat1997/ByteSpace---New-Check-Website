import Image from "next/image"
import Link from "next/link"
import BarChart from "@/svgs/signal_cellular_alt.svg"
import Star from "@/svgs/Style=Outlined-8.svg"
import { TProductCardProps } from "@/types/product.type"

export default function ProductCard({
  payload,
}: {
  payload: TProductCardProps
}) {
  return (
    <article className="w-full max-w-105 rounded-[24px] border border-neutral-200 bg-white p-4">
      <Link href={payload.href} className="block">
        <div className="relative h-55 overflow-hidden rounded-[12px]">
          <Image
            src={payload.image}
            alt={payload.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />

          <div className="absolute bottom-4 flex items-baseline justify-center">
            <div className="flex w-fit items-center justify-between gap-2 px-1 text-nowrap">
              <span className="rounded-full bg-white/35 px-4 py-2 label-xs backdrop-blur-sm">
                {payload.lessons} Lessons
              </span>

              <span className="rounded-full bg-white/35 px-4 py-2 label-xs backdrop-blur-sm">
                {payload.duration}
              </span>

              <span className="rounded-full bg-white/35 px-4 py-2 label-xs backdrop-blur-sm">
                {payload.comments} Comments
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[20.86px] flex items-start justify-between gap-4">
          <div>
            <h2 className="line-clamp-1 heading-xs">{payload.title}</h2>

            <p className="mt-1 body-xs text-neutral-500">
              by <span className="text-primary-500">{payload.instructor}</span>
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1 body-l text-neutral-600">
            {payload.rating.toFixed(1)}
            <Star className="size-6 fill-neutral-300 text-neutral-300" />
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-3 label-xs text-neutral-600">
            <BarChart className="size-5 text-neutral-700" />
            {payload.level}
          </span>

          <div className="flex items-center">
            {payload.instructors.slice(0, 4).map((person, index) => (
              <Image
                key={person.name}
                src={person.image}
                alt={person.name}
                width={36}
                height={36}
                className="-ml-2 rounded-full border-2 border-white object-cover first:ml-0"
                style={{ zIndex: payload.instructors.length - index }}
              />
            ))}

            <span className="ml-1 flex size-9 items-center justify-center rounded-full bg-secondary-400 body-s text-neutral-900">
              26+
            </span>
          </div>
        </div>

        <p className="mt-5">
          <span className="heading-xs text-primary-500">${payload.price}</span>
          <span className="body-xs text-neutral-500">/lifetime</span>
        </p>
      </Link>
    </article>
  )
}
