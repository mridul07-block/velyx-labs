const PARTNERS_ROW1 = [
  { name: 'Quantera', icon: '◇' },
  { name: 'CrypTorque', icon: '⚡' },
  { name: 'Orionis', icon: '✦' },
  { name: 'Aetheron', icon: '◈' },
  { name: 'ZyphAI', icon: '⬡' },
  { name: 'NovaSys', icon: '▲' },
  { name: 'Luminar', icon: '○' },
  { name: 'VoltEdge', icon: '⚙' },
]

const PARTNERS_ROW2 = [
  { name: 'PulseAI', icon: '◉' },
  { name: 'NexaFlow', icon: '⟡' },
  { name: 'ArcLight', icon: '◐' },
  { name: 'CipherX', icon: '✧' },
  { name: 'DriftLabs', icon: '⬢' },
  { name: 'SkyForge', icon: '◆' },
  { name: 'IronMesh', icon: '☍' },
  { name: 'OmniBase', icon: '⊕' },
]

const ROW1_ITEMS = [...PARTNERS_ROW1, ...PARTNERS_ROW1]
const ROW2_ITEMS = [...PARTNERS_ROW2, ...PARTNERS_ROW2]

export default function MarqueeStrip() {
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.05]">
      {/* Label */}
      <div className="text-center mb-7">
        <span className="divider-label justify-center max-w-xs mx-auto px-6">
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white/25">
            Trusted by teams at
          </span>
        </span>
      </div>

      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 h-full w-32 z-10"
        style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-32 z-10"
        style={{ background: 'linear-gradient(-90deg, #0a0a0a, transparent)' }} />

      {/* Row 1 — scrolls left */}
      <div className="marquee-container overflow-hidden mb-3">
        <div
          className="marquee-track flex items-center whitespace-nowrap"
          style={{ animation: 'marquee 38s linear infinite' }}
        >
          {ROW1_ITEMS.map((partner, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 px-7 py-2 mx-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span style={{ color: 'rgba(162,89,255,0.55)', fontSize: '0.85rem' }}>
                {partner.icon}
              </span>
              <span
                className="font-display text-sm font-semibold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {partner.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-container overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap"
          style={{ animation: 'marqueeReverse 44s linear infinite' }}
        >
          {ROW2_ITEMS.map((partner, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 px-7 py-2 mx-2 rounded-full"
              style={{
                background: 'rgba(0,212,255,0.03)',
                border: '1px solid rgba(0,212,255,0.08)',
              }}
            >
              <span style={{ color: 'rgba(0,212,255,0.45)', fontSize: '0.85rem' }}>
                {partner.icon}
              </span>
              <span
                className="font-display text-sm font-semibold tracking-wide"
                style={{ color: 'rgba(255,255,255,0.3)' }}
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
