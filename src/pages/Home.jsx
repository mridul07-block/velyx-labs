import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import MarqueeStrip from '../components/MarqueeStrip'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

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

/* ─── Stats data ─────────────────────────────────────────── */
const STATS = [
  { value: 47, suffix: '+', label: 'Automations Built' },
  { value: 2400, suffix: '', label: 'hrs Saved Monthly' },
  { value: 30, suffix: '+', label: 'Founders Scaled' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

/* ─── StatItem ───────────────────────────────────────────── */
function StatItem({ value, suffix, label }) {
  const [count, ref] = useCounter(value)
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-white mb-1">
        <span className="text-velyx-400">{count.toLocaleString()}</span>
        <span className="text-velyx-500">{suffix}</span>
      </div>
      <p className="font-mono text-xs text-white/40 tracking-widest uppercase">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ══ SECTION 1 — HERO ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(127,119,221,0.08) 0%, transparent 70%)',
        }} />

        {/* Orb */}
        <GlowOrb
          size={720}
          className="right-[-120px] top-[50%]"
          style={{ transform: 'translateY(-50%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="eyebrow">Velyx Labs · AI Automation Agency</span>
              </motion.div>

              <h1
                className="font-display mt-4 mb-6 leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', fontWeight: 700 }}
              >
                <span className="text-white block">
                  <TextReveal text="We Build AI Systems" delay={0.2} />
                </span>
                <span className="text-stroke block">
                  <TextReveal text="That Scale Founders." delay={0.35} />
                </span>
              </h1>

              <motion.p
                className="text-text-sub text-lg leading-relaxed max-w-lg mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From workflow automation to full AI strategy — we engineer the intelligence
                that turns startups into category leaders.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.72 }}
              >
                <CTAButton variant="primary" to="/contact" size="lg">
                  Start Scaling
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CTAButton>
                <CTAButton variant="secondary" to="/portfolio" size="lg">
                  See Our Work
                </CTAButton>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="mt-16 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="scroll-bounce w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-2">
                  <div className="w-1 h-1.5 rounded-full bg-velyx-400" />
                </div>
                <span className="font-mono text-xs text-white/30 tracking-widest uppercase">Scroll</span>
              </motion.div>
            </div>

            {/* Right — floating metric cards */}
            <div className="relative flex flex-col items-end gap-5 lg:pr-8">
              {[
                { label: 'Automations Built', value: '47', icon: '⚡', delay: 0 },
                { label: 'Time Saved', value: '2,400 hrs/mo', icon: '⏱', delay: 0.15 },
                { label: 'Founders Scaled', value: '30+', icon: '🚀', delay: 0.3 },
              ].map(({ label, value, icon, delay }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + delay }}
                  className={['float-a', 'float-b', 'float-c'][i]}
                  style={{ alignSelf: ['flex-end', 'flex-start', 'flex-end'][i] }}
                >
                  <GlassCard className="px-6 py-5 min-w-[200px]" hover={false}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg">{icon}</span>
                      <span className="font-mono text-xs text-white/40 tracking-wider uppercase">{label}</span>
                    </div>
                    <div className="font-display text-3xl font-bold text-white">
                      {value}
                    </div>
                    <div className="mt-2 h-0.5 rounded-full bg-gradient-to-r from-velyx-500 to-transparent" />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — MARQUEE ══════════════════════════════ */}
      <MarqueeStrip />

      {/* ══ SECTION 3 — SERVICES PREVIEW ═════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="eyebrow">What We Do</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Services" />
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'AI Automation',
                desc: 'Replace manual work with intelligent systems that run 24/7.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'AI Strategy',
                desc: 'Build your AI roadmap from day one with expert advisory.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Growth Systems',
                desc: 'AI infrastructure that scales with you as you grow.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                ),
              },
            ].map(({ num, title, desc, icon }, i) => (
              <ScrollReveal key={num} delay={i * 0.1}>
                <GlassCard className="p-7 border-top-violet h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-velyx-400 tracking-widest">{num}</span>
                    <span className="text-velyx-500">{icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{desc}</p>
                  <div className="mt-6">
                    <Link to="/services" data-cursor="expand" className="font-mono text-xs text-velyx-400 hover:text-velyx-300 transition-colors tracking-wider inline-flex items-center gap-2">
                      Learn more <span>→</span>
                    </Link>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — VELYX DIFFERENCE (BENTO) ═════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="eyebrow block text-center mb-12">The Velyx Difference</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Large left panel */}
            <ScrollReveal className="md:col-span-2" direction="left">
              <GlassCard className="p-10 h-full min-h-[300px] flex flex-col justify-center" style={{
                background: 'linear-gradient(135deg, rgba(127,119,221,0.08) 0%, rgba(13,13,24,0.9) 100%)',
              }}>
                <div className="mb-6">
                  <span className="eyebrow text-velyx-400">Our Philosophy</span>
                </div>
                <blockquote className="font-display font-bold leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
                >
                  <span className="text-white">"The founders who win aren't</span>
                  <br />
                  <span className="text-white">the ones who work hardest.</span>
                  <br />
                  <span className="text-velyx-400">They're the ones who</span>
                  <br />
                  <span className="text-velyx-400">leverage AI smartest."</span>
                </blockquote>
              </GlassCard>
            </ScrollReveal>

            {/* Right bento grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Speed', icon: '⚡', desc: 'Deploy in days, not months' },
                { label: 'Precision', icon: '🎯', desc: 'Targeting the right levers' },
                { label: 'Systems', icon: '⚙️', desc: 'Built to run without you' },
                { label: 'Scale', icon: '📈', desc: 'Grows as you grow' },
              ].map(({ label, icon, desc }, i) => (
                <ScrollReveal key={label} delay={i * 0.08}>
                  <GlassCard className="p-5 h-full flex flex-col gap-2">
                    <span className="text-2xl">{icon}</span>
                    <span className="font-display font-bold text-white text-sm">{label}</span>
                    <span className="font-body text-xs text-text-muted leading-snug">{desc}</span>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — PROCESS STEPS ════════════════════════ */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="eyebrow">How We Work</span>
              <h2 className="font-display font-bold text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Process" />
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(127,119,221,0.4), rgba(127,119,221,0.4), transparent)' }} />

            {[
              { num: '01', title: 'Audit', desc: 'We map your current ops and identify AI opportunities' },
              { num: '02', title: 'Strategy', desc: 'Custom roadmap built for your specific growth goals' },
              { num: '03', title: 'Build', desc: 'We engineer and deploy the systems end-to-end' },
              { num: '04', title: 'Scale', desc: 'Ongoing optimization as your business grows' },
            ].map(({ num, title, desc }, i) => (
              <ScrollReveal key={num} delay={i * 0.12} className="relative">
                <div className="flex flex-col items-center text-center px-4 pt-4">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-5 relative z-10">
                    <span className="font-mono font-bold text-velyx-400 text-lg">{num}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — STATS ROW ════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #0d0d18 0%, #0f0f22 50%, #0d0d18 100%)' }} />
        <div className="absolute inset-0 section-divider" style={{ height: '1px', top: 0 }} />
        <div className="absolute inset-0 section-divider" style={{ height: '1px', bottom: 0, top: 'auto' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map(({ value, suffix, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <StatItem value={value} suffix={suffix} label={label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 7 — CTA ══════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden flex items-center">
        <div className="absolute inset-0 grid-overlay opacity-20" />

        {/* Small orb */}
        <GlowOrb size={500} className="left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          <ScrollReveal>
            <span className="eyebrow">Ready?</span>
            <h2 className="font-display font-bold mt-4 mb-6 text-white tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              <TextReveal text="Ready to scale with AI?" />
            </h2>
            <p className="text-text-sub text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Let's build the AI systems that turn your startup into a category leader.
              Book a free 30-minute strategy call.
            </p>
            <CTAButton variant="primary" to="/contact" size="lg">
              Book a Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
