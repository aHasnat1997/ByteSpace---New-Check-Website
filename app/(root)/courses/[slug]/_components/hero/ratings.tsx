import BarIcon from "@/svgs/bar-chart-blue.svg"
import StarIcon from "@/svgs/star-blue.svg"
import UserIcon from "@/svgs/user-blue.svg"

export default function Ratings() {
  return (
    <div className="mt-6 space-y-6">
      <p className="label-l text-neutral-50">
        by <span className="text-secondary">purepearl studio</span>
      </p>

      <div className="flex gap-2">
        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium">
          <BarIcon />
          <span className="text-neutral-950">Intermediate</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium">
          <StarIcon />
          <span className="text-neutral-950">4.8 (172 reviews)</span>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2 text-base font-medium">
          <UserIcon />
          <span className="text-neutral-950">199 Students</span>
        </div>
      </div>
    </div>
  )
}
