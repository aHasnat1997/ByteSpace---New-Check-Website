import { Button } from "@/components/animate-ui/components/buttons/button"
import ConeIcon from "@/svgs/Cone.svg"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-fit items-center gap-2">
        <Image src="/logo.svg" alt="logo" height={50} width={50} />
        <p className="font-clash-display text-5xl font-bold">ByteSpace</p>
      </div>

      <div className="flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="heading-m">Project ready!</h1>
            <p className="body-s">
              You may now add components and start building.
            </p>
            <p className="body-s">
              We&apos;ve already added the button component for you.
            </p>
            <Button className="mt-2">Button</Button>
          </div>
          <ConeIcon className="h-48 w-48 text-[#CBFC01]" />
        </div>
      </div>
    </>
  )
}
