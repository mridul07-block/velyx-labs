import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

const CASE_STUDIES = [
  {
    tag: 'E-Commerce',
    name: 'DTC Founder',
    result: 'Automated 80% of operations in 6 weeks',
    metric: '80%',
    metricLabel: 'ops automated',
    detail: 'Replaced 4 full-time manual roles with AI systems handling inventory, customer support, and fulfillment coordination.',
    large: true,
  },
  {
    tag: 'SaaS',
    name: 'B2B Startup',
    result: '3x revenue in 90 days with AI outbound',
    metric: '3×',
    metricLabel: 'revenue growth',
    detail: 'Built an AI-powered outbound engine that personalizes at scale, turning cold lists into qualified pipeline.',
    large: false,
  },
  {
    tag: 'Coaching',
    name: 'Coaching Business',
    result: 'Saved 40hrs/week with content automation',
    metric: '40h',
    metricLabel: 'saved weekly',
    detail: 'Automated content repurposing, newsletter production, and social scheduling across 5 platforms.',
    large: false,
  },
  {
    tag: 'Agency',
    name: 'Agency Owner',
    result: 'Scaled to $50K/mo with AI systems',
    metric: '$50K',
    metricLabel: 'monthly revenue',
    detail: 'Built client delivery, reporting, and onboarding systems that let the founder remove themselves from operations.',
    large: true,
  },
]

const RESULTS = [
  { value: 200, suffix: '+', label: 'Hours Saved' },
  { value: 47, suffix: '', label: 'Automations Built' },
  { value: 30, suffix: '', label: 'Founders Helped' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
]

function CounterStat({ value, suffix, prefix = '', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const duration = 2000
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
        <span className="text-velyx-400">{prefix}{count.toLocaleString()}{suffix}</span>
      </div>
      <p className="font-mono text-xs text-white/40 tracking-widest uppercase">{label}</p>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="page-wrapper">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 30% 40%, rgba(127,119,221,0.07) 0%, transparent 65%)',
        }} />
        <GlowOrb size={600} className="left-[-100px] top-[-80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.span className="eyebrow block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Case Studies
          </motion.span>
          <h1 className="font-display font-bold text-white mt-3 tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            <TextReveal text="Work That Speaks" delay={0.2} />
          </h1>
          <motion.p className="text-text-sub text-lg max-w-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Real results from real founders who chose to scale with AI.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Case study grid ───────────────────────────────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map(({ tag, name, result, metric, metricLabel, detail, large }, i) => (
              <ScrollReveal key={name} delay={i * 0.1} className={large ? 'md:row-span-1' : ''}>
                <GlassCard className="overflow-hidden h-full cursor-pointer group">
                  {/* Top accent bar */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-velyx-500 via-velyx-400 to-transparent" />

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono text-xs px-3 py-1.5 rounded-lg"
                        style={{ background: 'rgba(127,119,221,0.12)', color: '#9B94E8', letterSpacing: '0.1em' }}>
                        {tag}
                      </span>
                      <div className="text-right">
                        <div className="font-display font-bold text-3xl text-velyx-400">{metric}</div>
                        <div className="font-mono text-xs text-white/35 tracking-wider">{metricLabel}</div>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-2">{name}</h3>
                    <p className="text-velyx-300 font-medium text-sm mb-4">{result}</p>

                    <p className="text-text-muted text-sm leading-relaxed mt-2 group-hover:text-text-sub transition-colors duration-300">
                      {detail}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-velyx-400 text-xs font-mono tracking-wider">
                      <span>View Case Study</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      >→</motion.span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results strip ─────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #0d0d18 0%, #0f0f22 50%, #0d0d18 100%)' }} />
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="section-divider absolute bottom-0 inset-x-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {RESULTS.map(({ value, suffix, prefix, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <CounterStat value={value} suffix={suffix} prefix={prefix} label={label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <GlowOrb size={400} className="left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="eyebrow">Your Turn</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 mb-5 tracking-tight">
              <TextReveal text="Ready to become the next success story?" />
            </h2>
            <p className="text-text-sub mb-8">Let's map out the AI systems that will drive your growth.</p>
            <CTAButton variant="primary" to="/contact" size="lg">Book a Strategy Call →</CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
