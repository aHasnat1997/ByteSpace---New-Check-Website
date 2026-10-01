import { Button } from "../animate-ui/components/buttons/button"
import Filter from "@/svgs/Style=Outlined-1.svg"
import Level from "@/svgs/signal_cellular_alt.svg"
import Category from "@/svgs/Style=Outlined.svg"
import Relevant from "@/svgs/Style=Filled.svg"

export default function FilterButtons() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:gap-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <Button variant="outline" size="sm">
          <Filter className="size-6 text-neutral-700" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Level className="size-6 text-neutral-700" />
          Level
        </Button>
        <Button variant="outline" size="sm">
          <Category className="size-6 text-neutral-700" />
          Category
        </Button>
      </div>
      <div>
        <Button variant="outline" size="sm">
          <Relevant className="size-6 text-neutral-700" />
          Most relevant
        </Button>
      </div>
    </div>
  )
}
