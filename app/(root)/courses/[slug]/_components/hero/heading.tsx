import { Button } from "@/components/animate-ui/components/buttons/button"
import ShareIcon from "@/svgs/share.svg"

export default function Heading() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-2">
        <h1 className="heading-s text-neutral-50">
          Build Digital Asset: A Comprehensive Guide
        </h1>
        <p className="heading-xs text-neutral-50">
          Unlock the Power of Digital Creation with Expert Guidance
        </p>
      </div>

      <Button variant="secondary">
        <ShareIcon />
        <span>Share</span>
      </Button>
    </div>
  )
}
