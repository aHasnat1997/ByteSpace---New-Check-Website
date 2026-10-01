import Image from "next/image"

interface AuthPageLayoutProps {
  heading: string
  description: string
  children: React.ReactNode
}

export default function AuthPageLayout({
  heading,
  description,
  children,
}: AuthPageLayoutProps) {
  return (
    <main>
      <section className="isolate flex min-h-dvh flex-col justify-center bg-primary-700 grid-background pb-12 pt-32 lg:pt-40">
        <div className="section-container flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mx-auto mb-10 flex w-full max-w-123 flex-1 flex-col text-center lg:mx-0 lg:mb-0 lg:text-left">
            <h6 className="heading-s text-neutral-50 lg:heading-xs">{heading}</h6>
            <p className="mt-2 body-m text-neutral-50 lg:mt-4 lg:body-l">{description}</p>

            <div className="relative mt-13.5 hidden aspect-548/585 w-full lg:block">
              <Image
                src="/images/auth.png"
                alt="Auth illustration"
                fill
                className="object-fill object-center"
              />
            </div>
          </div>

          <div className="w-full max-w-full lg:max-w-144.75 lg:flex-1 mx-auto lg:mx-0">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
