import { Button } from "@/components/animate-ui/components/buttons/button"
import ShareIcon from "@/svgs/share.svg"

export default function Heading() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-2">
        <h1
          className="heading-s text-neutral-50"
          style={{ fontSize: "clamp(1.25rem, 3.5vw, 36px)" }}
        >
          Build Digital Asset: A Comprehensive Guide
        </h1>
        <p className="heading-xs text-neutral-50" style={{ fontSize: "clamp(0.875rem, 2vw, 20px)" }}>
          Unlock the Power of Digital Creation with Expert Guidance
        </p>
      </div>

      <Button variant="secondary" className="w-fit shrink-0">
        <ShareIcon className="size-6" />
        <span>Share</span>
      </Button>
    </div>
  )
}
