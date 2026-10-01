import Ornament from "@/components/shared/ornament"
import Stage from "@/components/shared/stage"

export default function PotentialOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
      {/* ── Mobile only (below md) ── */}
      <Stage width={390} className="md:hidden">
        <Ornament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 110, h: 110, left: -20, top: -10 }}
        />
        <Ornament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 130, h: 130, left: -10, bottom: -30 }}
        />
        <Ornament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 90, h: 90, left: -20, bottom: 40 }}
        />
        <Ornament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 130, h: 130, right: -20, top: -10 }}
        />
        <Ornament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 110, h: 110, right: -10, bottom: -30 }}
        />
        <Ornament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 80, h: 80, right: 0, bottom: 60 }}
        />
      </Stage>

      {/* ── Tablet only (md to lg) ── */}
      <Stage width={768} className="hidden md:block lg:hidden">
        <Ornament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 160, h: 160, left: -30, top: -15 }}
        />
        <Ornament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 180, h: 180, left: -10, bottom: -50 }}
        />
        <Ornament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 120, h: 120, left: -40, bottom: 60 }}
        />

        <Ornament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 180, h: 180, right: -20, top: -10 }}
        />
        <Ornament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 160, h: 160, right: -10, bottom: -40 }}
        />
        <Ornament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 110, h: 110, right: -20, bottom: 60 }}
        />
      </Stage>

      {/* ── Desktop (lg and up) ── */}
      <Stage width={1920} className="hidden lg:block">
        <Ornament
          n="/images/potentials-ornaments-3.png"
          fit="object-left"
          box={{ w: 300, h: 300, left: 0, top: -30 }}
        />
        <Ornament
          n="/images/potentials-ornaments-4.png"
          fit="object-left"
          box={{ w: 175, h: 175, left: 180, top: 10 }}
        />
        <Ornament
          n="/images/potentials-ornaments-5.png"
          fit="object-left"
          box={{ w: 188, h: 188, left: 0, top: 230 }}
        />
        <Ornament
          n="/images/potentials-ornaments-6.png"
          fit="object-left"
          box={{ w: 342, h: 342, left: 40, bottom: -80 }}
        />
        <Ornament
          n="/images/potentials-ornaments-1.png"
          fit="object-right"
          box={{ w: 188, h: 188, right: 170, top: 0 }}
        />
        <Ornament
          n="/images/potentials-ornaments-7.png"
          fit="object-right"
          box={{ w: 370, h: 370, right: 0, top: 10 }}
        />
        <Ornament
          n="/images/potentials-ornaments-2.png"
          fit="object-right"
          box={{ w: 330, h: 330, right: 0, bottom: -70 }}
        />
      </Stage>
    </div>
  )
}
