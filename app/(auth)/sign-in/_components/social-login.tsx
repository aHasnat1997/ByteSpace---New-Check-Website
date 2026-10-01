import FacebookIcon from "@/svgs/facebook.svg"
import GoogleIcon from "@/svgs/google.svg"

export default function SocialLogin() {
  return (
    <div className="my-12">
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-full bg-neutral-100" />
        <span className="body-l text-neutral-400">or</span>
        <div className="h-px w-full bg-neutral-100" />
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button className="grid size-18 cursor-pointer place-content-center rounded-[24px] border border-neutral-200">
          <FacebookIcon />
        </button>

        <button className="grid size-18 cursor-pointer place-content-center rounded-[24px] border border-neutral-200">
          <GoogleIcon />
        </button>
      </div>
    </div>
  )
}
