/**
 * Represents an instructor for a product or course.
 *
 * @typedef {Object} TInstructor
 * @property {string} name - The name of the instructor.
 * @property {string} image - The URL or path to the instructor's image.
 */
type TInstructor = {
  name: string
  image: string
}

/**
 * Properties for a product card component.
 *
 * @typedef {Object} TProductCardProps
 * @property {string} image - The URL or path to the product image.
 * @property {string} title - The title of the product or course.
 * @property {string} instructor - The primary instructor's name.
 * @property {string} instructorHref - The link to the primary instructor's profile.
 * @property {string} level - The difficulty level (e.g., Beginner, Advanced).
 * @property {number} lessons - The total number of lessons included.
 * @property {string} duration - The total duration of the product or course.
 * @property {number} comments - The number of comments or reviews.
 * @property {number} rating - The average user rating.
 * @property {number} price - The price of the product.
 * @property {TInstructor[]} instructors - A list of instructors associated with the product.
 * @property {string} href - The link to the product details page.
 */
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
