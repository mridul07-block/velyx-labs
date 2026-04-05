import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

const CASE_STUDIES = [
  {
    tag: 'E-Commerce',
    tagColor: '#FBBF24',
    tagBg: 'rgba(245,158,11,0.1)',
    tagBorder: 'rgba(245,158,11,0.25)',
    name: 'DTC Founder',
    result: 'Automated 80% of operations in 6 weeks',
    metric: '80%',
    metricLabel: 'ops automated',
    detail: 'Replaced 4 full-time manual roles with AI systems handling inventory, customer support, and fulfillment coordination.',
    quote: 'We went from 4 FTE manually processing orders to zero. The system runs itself.',
    accentLine: 'linear-gradient(90deg, #FBBF24, #F59E0B)',
    hero: true,
  },
  {
    tag: 'SaaS',
    tagColor: '#33DFFF',
    tagBg: 'rgba(0,212,255,0.1)',
    tagBorder: 'rgba(0,212,255,0.25)',
    name: 'B2B Startup',
    result: '3x revenue in 90 days with AI outbound',
    metric: '3×',
    metricLabel: 'revenue growth',
    detail: 'Built an AI-powered outbound engine that personalizes at scale, turning cold lists into qualified pipeline.',
    quote: 'Velyx built an AI outbound engine that 3x\'d our revenue in 90 days.',
    accentLine: 'linear-gradient(90deg, #33DFFF, #00D4FF)',
    hero: false,
  },
  {
    tag: 'Coaching',
    tagColor: '#BF7BFF',
    tagBg: 'rgba(162,89,255,0.1)',
    tagBorder: 'rgba(162,89,255,0.25)',
    name: 'Coaching Business',
    result: 'Saved 40hrs/week with content automation',
    metric: '40h',
    metricLabel: 'saved weekly',
    detail: 'Automated content repurposing, newsletter production, and social scheduling across 5 platforms.',
    quote: 'I got 40 hours a week back. That\'s like hiring an assistant who never sleeps.',
    accentLine: 'linear-gradient(90deg, #BF7BFF, #A259FF)',
    hero: false,
  },
  {
    tag: 'Agency',
    tagColor: '#34D399',
    tagBg: 'rgba(52,211,153,0.1)',
    tagBorder: 'rgba(52,211,153,0.25)',
    name: 'Agency Owner',
    result: 'Scaled to $50K/mo with AI systems',
    metric: '$50K',
    metricLabel: 'monthly revenue',
    detail: 'Built client delivery, reporting, and onboarding systems that let the founder remove themselves from operations.',
    quote: 'We doubled revenue without doubling headcount. That\'s the Velyx difference.',
    accentLine: 'linear-gradient(90deg, #34D399, #10B981)',
    hero: false,
  },
]

const TESTIMONIALS = [
  {
    quote: "We went from 4 FTE manually processing orders to zero. The system just runs itself — 24/7, no human intervention.",
    name: "Marcus T.",
    role: "Founder",
    company: "DTC E-Commerce",
    color: '#FBBF24',
  },
  {
    quote: "Velyx built an outbound engine that 3x'd our revenue in 90 days. I didn't believe it was possible until I saw the numbers.",
    name: "David K.",
    role: "Co-founder",
    company: "B2B SaaS",
    color: '#33DFFF',
  },
  {
    quote: "I got 40 hours a week back. I now spend that time on product and sales — the things only I can do.",
    name: "Sarah M.",
    role: "Founder & Coach",
    company: "Coaching Business",
    color: '#BF7BFF',
  },
]

/* ─── Detail slide-over panel ─────────────────────────────── */
function CaseDetailPanel({ cs, onClose }) {
  if (!cs) return null
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-lg h-full flex flex-col glass border-l overflow-y-auto"
        style={{ borderColor: cs.tagBorder }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full" style={{ background: cs.accentLine }} />

        <div className="p-10 flex flex-col gap-6 flex-1">
          {/* Close */}
          <button onClick={onClose}
            className="self-end w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Tag + metric */}
          <div className="flex items-center justify-between">
            <span className="tag-pill" style={{ borderColor: cs.tagBorder, background: cs.tagBg, color: cs.tagColor }}>
              {cs.tag}
            </span>
            <div className="text-right">
              <div className="font-display font-bold text-4xl" style={{ color: cs.tagColor }}>{cs.metric}</div>
              <div className="font-mono text-xs text-white/30 tracking-wider">{cs.metricLabel}</div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-2">{cs.name}</h2>
            <p className="font-medium" style={{ color: cs.tagColor }}>{cs.result}</p>
          </div>

          <p className="text-text-sub leading-relaxed">{cs.detail}</p>

          {/* Quote */}
          <div className="rounded-xl p-6" style={{ background: cs.tagBg, border: `1px solid ${cs.tagBorder}` }}>
            <div className="quote-mark mb-2">"</div>
            <p className="text-white/80 italic leading-relaxed text-sm">"{cs.quote}"</p>
            <p className="font-mono text-xs mt-3" style={{ color: cs.tagColor }}>— {cs.name}</p>
          </div>

          <div className="mt-auto">
            <CTAButton variant="primary" to="/contact">
              Get Similar Results →
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(t => (t + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const heroCase = CASE_STUDIES[0]
  const otherCases = CASE_STUDIES.slice(1)

  return (
    <div className="page-wrapper">

      {/* ── Hero — editorial large type ─────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pb-16 pt-36 overflow-hidden">
        {/* Background outlined "WORK" watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(8rem, 25vw, 22rem)',
              letterSpacing: '-0.04em',
              WebkitTextStroke: '1px rgba(162,89,255,0.08)',
              color: 'transparent',
            }}
          >
            WORK
          </span>
        </div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 30% 40%, rgba(162,89,255,0.06) 0%, transparent 65%)',
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

      {/* ── Case studies — magazine editorial grid ─────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">

            {/* Hero case — full width */}
            <ScrollReveal>
              <GlassCard
                className="overflow-hidden cursor-pointer group"
                style={{ borderColor: heroCase.tagBorder }}
                hover={false}
                onClick={() => setSelectedCase(heroCase)}
              >
                {/* Top accent line */}
                <div className="h-1 w-full" style={{ background: heroCase.accentLine }} />
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left */}
                  <div>
                    <span
                      className="tag-pill mb-5 inline-block"
                      style={{ borderColor: heroCase.tagBorder, background: heroCase.tagBg, color: heroCase.tagColor }}
                    >
                      {heroCase.tag}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">{heroCase.result}</h2>
                    <p className="text-text-sub leading-relaxed mb-6">{heroCase.detail}</p>
                    <div className="flex items-center gap-2 font-mono text-xs tracking-wider transition-colors"
                      style={{ color: heroCase.tagColor }}>
                      <span>View Case Study</span>
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                    </div>
                  </div>
                  {/* Right — big metric */}
                  <div className="flex flex-col items-center md:items-end">
                    <div className="quote-mark text-left mb-2" style={{ color: `${heroCase.tagColor}25` }}>"</div>
                    <p className="text-white/70 italic text-lg leading-relaxed mb-4 text-right">"{heroCase.quote}"</p>
                    <div className="text-right">
                      <div className="font-display font-bold" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', color: heroCase.tagColor, lineHeight: 1 }}>
                        {heroCase.metric}
                      </div>
                      <div className="font-mono text-xs text-white/35 tracking-widest">{heroCase.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Other cases — 3 column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherCases.map((cs, i) => (
                <ScrollReveal key={cs.name} delay={i * 0.1}>
                  <GlassCard
                    className="overflow-hidden h-full cursor-pointer group"
                    style={{ borderColor: cs.tagBorder }}
                    hover={true}
                    onClick={() => setSelectedCase(cs)}
                  >
                    {/* Left accent stripe */}
                    <div className="flex h-full">
                      <div className="w-1 flex-shrink-0" style={{ background: cs.accentLine }} />
                      <div className="p-7 flex flex-col flex-1">
                        <div className="flex items-start justify-between mb-5">
                          <span
                            className="tag-pill"
                            style={{ borderColor: cs.tagBorder, background: cs.tagBg, color: cs.tagColor }}
                          >
                            {cs.tag}
                          </span>
                          <div className="text-right">
                            <div className="font-display font-bold text-2xl" style={{ color: cs.tagColor }}>{cs.metric}</div>
                            <div className="font-mono text-[10px] text-white/30 tracking-wider">{cs.metricLabel}</div>
                          </div>
                        </div>
                        <p className="font-display font-semibold text-white mb-3 leading-snug">{cs.result}</p>
                        <p className="text-text-muted text-sm leading-relaxed flex-1 group-hover:text-text-sub transition-colors">
                          {cs.detail}
                        </p>
                        <div className="mt-5 flex items-center gap-2 text-xs font-mono tracking-wider transition-colors"
                          style={{ color: cs.tagColor }}>
                          <span>View Case Study</span>
                          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (replacing results strip) ─────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, #090912 0%, #0d0d1e 50%, #090912 100%)' }} />
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="section-divider absolute bottom-0 inset-x-0" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="eyebrow block mb-10">From the Founders</span>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[160px] flex flex-col justify-center"
            >
              <p
                className="font-display font-bold leading-tight mb-6 text-white"
                style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
              >
                <span style={{ color: TESTIMONIALS[activeTestimonial].color }}>"</span>
                {TESTIMONIALS[activeTestimonial].quote}
                <span style={{ color: TESTIMONIALS[activeTestimonial].color }}>"</span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs text-white"
                  style={{ background: TESTIMONIALS[activeTestimonial].color + '30', border: `1px solid ${TESTIMONIALS[activeTestimonial].color}40` }}
                >
                  {TESTIMONIALS[activeTestimonial].name[0]}
                </div>
                <div>
                  <span className="text-white font-medium text-sm">{TESTIMONIALS[activeTestimonial].name}</span>
                  <span className="text-text-muted text-xs ml-2">· {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeTestimonial === i ? '24px' : '8px',
                  height: '8px',
                  background: activeTestimonial === i ? TESTIMONIALS[activeTestimonial].color : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <GlowOrb size={500} className="left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="eyebrow">Your Turn</span>
            <h2 className="font-display font-bold text-white mt-4 mb-5 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              <TextReveal text="Ready to become the next success story?" />
            </h2>
            <p className="text-text-sub mb-8 text-lg">
              Let's map out the AI systems that will drive your growth.
            </p>
            <CTAButton variant="primary" to="/contact" size="lg">
              Book a Strategy Call →
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Case detail slide-over ─────────────────────────── */}
      <AnimatePresence>
        {selectedCase && (
          <CaseDetailPanel cs={selectedCase} onClose={() => setSelectedCase(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
