const PARTNERS = [
  { name: 'Quantera', icon: '◇' },
  { name: 'CrypTorque', icon: '⚡' },
  { name: 'Orionis', icon: '✦' },
  { name: 'Aetheron', icon: '◈' },
  { name: 'ZyphAI', icon: '⬡' },
  { name: 'NovaSys', icon: '▲' },
  { name: 'Luminar', icon: '○' },
  { name: 'VoltEdge', icon: '⚙' },
]

// Duplicate for seamless loop
const ITEMS = [...PARTNERS, ...PARTNERS]

export default function MarqueeStrip() {
  return (
    <section className="relative py-8 overflow-hidden border-y border-white/[0.05]">
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 h-full w-28 z-10"
        style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-28 z-10"
        style={{ background: 'linear-gradient(-90deg, #0a0a0a, transparent)' }} />

      <div className="marquee-container overflow-hidden">
        <div
          className="marquee-track flex items-center gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 35s linear infinite' }}
        >
          {ITEMS.map((partner, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-10">
              <span
                className="text-lg"
                style={{ color: 'rgba(127,119,221,0.5)' }}
              >
                {partner.icon}
              </span>
              <span
                className="font-display text-base font-semibold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {partner.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
