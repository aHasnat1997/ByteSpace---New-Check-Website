import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="h-[40vh] bg-primary-700 grid-background p-12">
        <div className="mx-auto flex w-fit items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={50} width={50} />
          <p className="font-clash-display text-5xl font-bold">ByteSpace</p>
        </div>
      </div>
    </>
  )
}
