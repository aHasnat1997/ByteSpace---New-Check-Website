import RatingStar from "@/svgs/Style=Filled-1.svg"

type RatingData = {
  averageRating: number
  breakdown: { stars: number; count: number }[]
}

export default function RatingSummary({
  ratingData,
}: {
  ratingData: RatingData
}) {
  // Calculate total reviews for percentage bar widths
  const totalReviews = ratingData.breakdown.reduce(
    (acc, curr) => acc + curr.count,
    0
  )

  return (
    <div className="mt-6 w-full rounded-[24px] border p-4 sm:p-6 md:p-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <div className="flex flex-col items-center rounded-[8px] bg-secondary-400 p-10">
          <span className="label-s text-neutral-950">Ratings</span>
          <span className="heading-s font-heading text-neutral-950">
            {ratingData.averageRating.toFixed(1)}
          </span>
        </div>

        <div className="flex w-full flex-1 flex-col gap-1">
          {ratingData.breakdown.map((item) => {
            const percentage = (item.count / totalReviews) * 100

            return (
              <div key={item.stars} className="flex items-center gap-4 text-sm">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-secondary-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <RatingStar key={i} />
                  ))}
                </div>

                <span className="w-5 text-right body-m text-neutral-700">
                  {item.count}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
