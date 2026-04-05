import { useEffect, useRef, useState } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import MarqueeStrip from '../components/MarqueeStrip'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import AetherFlowHero from '../components/ui/aether-flow-hero'

/* ─── Animated counter hook ─────────────────────────────── */
function useCounter(target, duration = 2200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return [count, ref]
}

/* ─── Services accordion data ────────────────────────────── */
const ACCORDION_SERVICES = [
  {
    num: '01',
    title: 'AI Automation',
    tagline: 'Replace manual work with intelligent systems.',
    desc: 'We build end-to-end automation pipelines that eliminate repetitive tasks, accelerate workflows, and free your team to focus on what matters.',
    stat: '47 workflows built',
    color: 'rgba(162,89,255,0.08)',
    borderColor: 'rgba(162,89,255,0.3)',
    accentColor: '#BF7BFF',
    features: ['Lead gen & CRM', 'Email sequences', 'Content pipelines', 'Reporting systems'],
  },
  {
    num: '02',
    title: 'AI Strategy',
    tagline: 'Build your AI roadmap from day one.',
    desc: 'We help founders understand where AI creates the most leverage in their business, then build a prioritized roadmap with clear ROI milestones.',
    stat: '30+ roadmaps delivered',
    color: 'rgba(0,212,255,0.06)',
    borderColor: 'rgba(0,212,255,0.25)',
    accentColor: '#33DFFF',
    features: ['AI opportunity audit', 'Tool selection', 'ROI projections', 'Advisory sessions'],
  },
  {
    num: '03',
    title: 'Growth Systems',
    tagline: 'AI infrastructure that compounds over time.',
    desc: 'We build the revenue operations, outbound systems, and retention automation that compound over time — creating unfair advantages at every stage.',
    stat: '$2M+ revenue generated',
    color: 'rgba(245,158,11,0.06)',
    borderColor: 'rgba(245,158,11,0.25)',
    accentColor: '#FBBF24',
    features: ['Revenue automation', 'AI outbound', 'Retention systems', 'Scale infrastructure'],
  },
]

/* ─── Stats data ─────────────────────────────────────────── */
const STATS = [
  { value: 47, suffix: '+', label: 'Automations Built', color: '#BF7BFF', glow: 'rgba(162,89,255,0.2)' },
  { value: 2400, suffix: '', label: 'hrs Saved Monthly', color: '#33DFFF', glow: 'rgba(0,212,255,0.15)' },
  { value: 30, suffix: '+', label: 'Founders Scaled', color: '#BF7BFF', glow: 'rgba(162,89,255,0.2)' },
  { value: 98, suffix: '%', label: 'Client Retention', color: '#33DFFF', glow: 'rgba(0,212,255,0.15)' },
]

const STAT_OFFSETS = ['-mt-3', 'mt-5', '-mt-5', 'mt-2']

/* ─── Traits data ────────────────────────────────────────── */
const TRAITS = [
  { num: '01', label: 'Speed', desc: 'Deploy in days, not months' },
  { num: '02', label: 'Precision', desc: 'Targeting the right levers' },
  { num: '03', label: 'Systems', desc: 'Built to run without you' },
  { num: '04', label: 'Scale', desc: 'Grows as you grow' },
]

/* ─── Process steps ──────────────────────────────────────── */
const STEPS = [
  { num: '01', title: 'Audit', desc: 'We map your current ops and identify exactly where AI creates the most leverage.', time: 'Day 1' },
  { num: '02', title: 'Strategy', desc: 'Custom roadmap built for your specific growth goals with clear ROI milestones.', time: 'Day 2–3' },
  { num: '03', title: 'Build', desc: 'We engineer and deploy the systems end-to-end — from tools to testing to launch.', time: 'Week 1–3' },
  { num: '04', title: 'Scale', desc: 'Ongoing optimization and expansion as your business evolves and grows.', time: 'Month 2+' },
]

/* ─── StatItem ───────────────────────────────────────────── */
function StatItem({ value, suffix, label, color, glow, offset }) {
  const [count, ref] = useCounter(value)
  return (
    <div ref={ref} className={`${offset}`}>
      <GlassCard
        className="p-7 flex flex-col items-center text-center"
        style={{ boxShadow: `0 0 40px ${glow}, 0 8px 32px rgba(0,0,0,0.45)` }}
      >
        <div className="font-display font-bold mb-2" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color }}>
          {count.toLocaleString()}{suffix}
        </div>
        <p className="font-mono text-xs text-white/40 tracking-widest uppercase">{label}</p>
      </GlassCard>
    </div>
  )
}

/* ─── AI Visual for CTA section ─────────────────────────── */
function AIVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-velyx-border opacity-30"
        style={{ animation: 'pingSlow 4s ease-in-out infinite' }} />
      {/* Middle ring */}
      <div className="absolute inset-[15%] rounded-full border border-teal-border opacity-40"
        style={{ animation: 'pingSlow 4s ease-in-out infinite 0.8s' }} />
      {/* Inner ring */}
      <div className="absolute inset-[30%] rounded-full border border-velyx-border opacity-50"
        style={{ animation: 'pingSlow 4s ease-in-out infinite 1.6s' }} />
      {/* Center node */}
      <div className="absolute inset-[42%] rounded-full flex items-center justify-center"
        style={{ background: 'radial-gradient(circle, rgba(162,89,255,0.5), rgba(162,89,255,0.1))' }}>
        <div className="w-full h-full rounded-full"
          style={{ background: 'rgba(162,89,255,0.8)', boxShadow: '0 0 30px rgba(162,89,255,0.6)' }} />
      </div>
      {/* Orbiting nodes */}
      {[0, 120, 240].map((deg, i) => (
        <div key={i}
          className="absolute inset-0 rounded-full"
          style={{ animation: `orbit ${8 + i * 2}s linear infinite ${i % 2 === 1 ? 'reverse' : ''}` }}>
          <div
            className="absolute w-3 h-3 rounded-full top-[10%] left-[50%] -translate-x-1/2"
            style={{
              background: i % 2 === 0 ? '#BF7BFF' : '#33DFFF',
              boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(162,89,255,0.8)' : 'rgba(0,212,255,0.8)'}`,
              transform: `rotate(${deg}deg) translateX(120px) rotate(-${deg}deg) translateX(-50%)`,
            }}
          />
        </div>
      ))}
      {/* Scan line */}
      <div className="absolute inset-[15%] rounded-full overflow-hidden opacity-20">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
          style={{ animation: 'scan 3s ease-in-out infinite' }} />
      </div>
      {/* Corner labels */}
      <div className="absolute top-[8%] right-[8%] font-mono text-[0.6rem] text-teal-400/60 tracking-widest">AI</div>
      <div className="absolute bottom-[8%] left-[8%] font-mono text-[0.6rem] text-velyx-400/60 tracking-widest">SYS</div>
    </div>
  )
}

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="page-wrapper">
      {/* ══ SECTION 1 — HERO ══════════════════════════════════ */}
      <AetherFlowHero />

      {/* ══ SECTION 2 — MARQUEE ══════════════════════════════ */}
      <MarqueeStrip />

      {/* ══ SECTION 3 — SERVICES ACCORDION ══════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12">
              <span className="eyebrow">What We Do</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Services" />
              </h2>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <div className="hidden md:flex gap-3 h-[480px]">
            {ACCORDION_SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className="accordion-panel rounded-2xl relative overflow-hidden border"
                style={{
                  flex: activeService === i ? '2.8 1 0%' : '0.7 1 0%',
                  background: activeService === i ? svc.color : 'rgba(255,255,255,0.02)',
                  borderColor: activeService === i ? svc.borderColor : 'rgba(255,255,255,0.07)',
                  boxShadow: activeService === i
                    ? `0 0 40px ${svc.glow ?? 'rgba(162,89,255,0.15)'}, 0 8px 32px rgba(0,0,0,0.4)`
                    : '0 4px 16px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={() => setActiveService(i)}
              >
                {/* Collapsed: rotated number + title */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300"
                  style={{ opacity: activeService === i ? 0 : 1, pointerEvents: activeService === i ? 'none' : 'auto' }}
                >
                  <span
                    className="font-mono font-bold text-xs tracking-widest"
                    style={{ color: svc.accentColor, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {svc.num}
                  </span>
                  <span
                    className="font-display font-bold text-base text-white"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {svc.title}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className="absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-300"
                  style={{ opacity: activeService === i ? 1 : 0, pointerEvents: activeService === i ? 'auto' : 'none' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs tracking-widest" style={{ color: svc.accentColor }}>
                        {svc.num}
                      </span>
                      <span
                        className="font-mono text-[0.6rem] px-3 py-1 rounded-full tracking-wider"
                        style={{ background: svc.color, border: `1px solid ${svc.borderColor}`, color: svc.accentColor }}
                      >
                        {svc.stat}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{svc.title}</h3>
                    <p className="font-medium mb-4 text-sm" style={{ color: svc.accentColor }}>{svc.tagline}</p>
                    <p className="text-text-sub text-sm leading-relaxed mb-6">{svc.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {svc.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: svc.accentColor }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider transition-colors"
                    style={{ color: svc.accentColor }}
                  >
                    Explore service <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile fallback: regular cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {ACCORDION_SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.num} delay={i * 0.1}>
                <GlassCard className="p-7 border-top-violet h-full">
                  <span className="font-mono text-xs tracking-widest mb-1 block" style={{ color: svc.accentColor }}>{svc.num}</span>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{svc.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/services" className="font-mono text-xs inline-flex items-center gap-2" style={{ color: svc.accentColor }}>
                    Learn more →
                  </Link>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — VELYX DIFFERENCE ════════════════════ */}
      <section className="relative py-24 overflow-hidden section-noise">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(162,89,255,0.04) 0%, transparent 50%, rgba(0,212,255,0.03) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="eyebrow block mb-12">The Velyx Difference</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">
            {/* Left: massive quote */}
            <ScrollReveal direction="left">
              <blockquote
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
              >
                <span className="text-white">"The founders who win </span>
                <span className="text-white">aren't the ones</span>
                <br />
                <span className="text-white">who work hardest.</span>
                <br />
                <span className="text-gradient"> They're the ones</span>
                <br />
                <span className="text-gradient">who leverage AI</span>
                <br />
                <span className="text-gradient">smartest."</span>
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-px bg-velyx-500 opacity-60" />
                <span className="font-mono text-xs text-white/30 tracking-widest">VELYX LABS PHILOSOPHY</span>
              </div>
            </ScrollReveal>

            {/* Right: numbered traits manifesto */}
            <div className="flex flex-col">
              {TRAITS.map(({ num, label, desc }, i) => (
                <ScrollReveal key={num} delay={i * 0.1}>
                  <div className="value-row py-6 flex items-baseline gap-5 cursor-default">
                    <span className="font-mono text-xs text-velyx-400/70 flex-shrink-0">{num}</span>
                    <div className="flex-1">
                      <span
                        className="font-display font-bold text-white block mb-1"
                        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                      >
                        {label}
                      </span>
                      <span className="text-text-muted text-sm">{desc}</span>
                    </div>
                    <span className="text-velyx-400/30 text-xs ml-2">→</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — PROCESS TIMELINE ════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="eyebrow">How We Work</span>
              <h2 className="font-display font-bold text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Process" />
              </h2>
            </div>
          </ScrollReveal>

          {/* Vertical alternating timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 timeline-line hidden md:block" />

            {STEPS.map(({ num, title, desc, time }, i) => (
              <ScrollReveal key={num} delay={i * 0.14} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex items-center gap-0 mb-16 md:mb-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 !== 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                    <GlassCard className="p-7 relative overflow-hidden">
                      {/* Giant background number */}
                      <span
                        className="absolute font-display font-bold text-white select-none pointer-events-none"
                        style={{
                          fontSize: '7rem',
                          opacity: 0.025,
                          bottom: '-1rem',
                          right: '0.5rem',
                          lineHeight: 1,
                        }}
                      >
                        {num}
                      </span>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs text-velyx-400 tracking-widest">{num}</span>
                          <span
                            className="font-mono text-[0.6rem] px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#33DFFF' }}
                          >
                            {time}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white mb-2">{title}</h3>
                        <p className="text-text-sub text-sm leading-relaxed">{desc}</p>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Center circle node */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full z-10 items-center justify-center"
                    style={{
                      background: 'rgba(162,89,255,0.12)',
                      border: '2px solid rgba(162,89,255,0.35)',
                      boxShadow: '0 0 20px rgba(162,89,255,0.2)',
                    }}>
                    <span className="font-mono font-bold text-velyx-400 text-sm">{num}</span>
                  </div>

                  {/* Empty opposing side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — STATS ROW ════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        {/* Horizon glow beam */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #0a0a0a 0%, #0f0f1a 50%, #0a0a0a 100%)' }} />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(162,89,255,0.07) 0%, transparent 70%)' }} />
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="section-divider absolute bottom-0 inset-x-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="hidden md:flex items-end justify-center gap-5">
            {STATS.map(({ value, suffix, label, color, glow }, i) => (
              <ScrollReveal key={label} delay={i * 0.1} className={`flex-1 max-w-[220px] ${STAT_OFFSETS[i]}`}>
                <StatItem value={value} suffix={suffix} label={label} color={color} glow={glow} offset="" />
              </ScrollReveal>
            ))}
          </div>
          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {STATS.map(({ value, suffix, label, color, glow }) => (
              <ScrollReveal key={label}>
                <StatItem value={value} suffix={suffix} label={label} color={color} glow={glow} offset="" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — CTA (ASYMMETRIC SPLIT) ══════════════ */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <GlowOrb size={600} className="right-[-100px] top-1/2" style={{ transform: 'translateY(-50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

            {/* Left: headline + dual CTAs + social proof */}
            <ScrollReveal direction="left">
              <span className="eyebrow mb-4 block">Ready?</span>
              <h2 className="font-display font-bold tracking-tight leading-none mb-6"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}>
                <span className="text-white block">Ready to scale</span>
                <span className="text-stroke block">with AI?</span>
              </h2>
              <p className="text-text-sub text-lg max-w-md mb-10 leading-relaxed">
                Let's build the AI systems that turn your startup into a category leader.
                Book a free 30-minute strategy call.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <CTAButton variant="primary" to="/contact" size="lg">
                  Book a Call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </CTAButton>
                <CTAButton variant="secondary" to="/services" size="lg">
                  See Pricing
                </CTAButton>
              </div>
              {/* Social proof row */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {['AR', 'SC', 'PP', 'JM'].map((init, i) => (
                    <div key={i}
                      className="w-9 h-9 rounded-full border-2 border-dark-base flex items-center justify-center font-display font-bold text-xs"
                      style={{
                        background: i % 2 === 0 ? 'linear-gradient(135deg,#A259FF,#7F77DD)' : 'linear-gradient(135deg,#00D4FF,#0088AA)',
                        color: 'white',
                        zIndex: 4 - i,
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Trusted by 30+ founders</p>
                  <p className="text-text-muted text-xs">2,400+ hrs saved monthly</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: AI visual */}
            <ScrollReveal direction="right">
              <AIVisual />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
