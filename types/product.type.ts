type TInstructor = {
  name: string
  image: string
}

export type TProductCardProps = {
  image: string
  title: string
  instructor: string
  instructorHref: string
  level: string
  lessons: number
  duration: string
  comments: number
  rating: number
  price: number
  instructors: TInstructor[]
  href: string
}
