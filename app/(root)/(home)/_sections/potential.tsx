import PotentialOrnaments from "../_components/potential-ornaments"
import Reveal from "@/components/shared/reveal"

/**
 * The Potential section.
 * Encourages users to join as creators with a call-to-action and decorative ornaments.
 *
 * @returns {JSX.Element} The Potential section component.
 */
export default function Potential() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-700 grid-background">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center space-y-6 px-[clamp(1.25rem,6vw,7.625rem)] py-12 md:space-y-8 md:px-[revert] md:py-16 lg:space-y-10 lg:py-21.25">
        <Reveal direction="fade-up" delay={0.05} duration={0.7}>
          <div className="mx-auto max-w-2xl">
            <h1
              className="text-center heading-m text-neutral-50"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 44px)",
                lineHeight: "120%",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
              }}
            >
              Unlock Your Potential as a Creator with ByteSpace
            </h1>
          </div>
        </Reveal>

        <Reveal direction="fade-up" delay={0.2} duration={0.7}>
          <p
            className="text-center body-l text-neutral-50"
            style={{ fontSize: "clamp(0.875rem, 2vw, 18px)" }}
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
        </Reveal>

        <Reveal direction="fade-up" delay={0.35} duration={0.7}>
          <button className="cursor-pointer rounded-full bg-secondary px-5 py-2.5 body-l text-sm font-medium text-neutral-950 md:px-6 md:py-3 md:text-base">
            Join as Creator
          </button>
        </Reveal>
      </div>

      <PotentialOrnaments />
    </section>
  )
}

