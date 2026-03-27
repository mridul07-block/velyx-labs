import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import MarqueeStrip from '../components/MarqueeStrip'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

/* ─── Starfield canvas ──────────────────────────────────── */
function Starfield() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const rafRef = useRef(null)

  const initStars = useCallback((w, h) => {
    const stars = []
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.0015 + 0.0005,
        offset: Math.random() * Math.PI * 2,
      })
    }
    starsRef.current = stars
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio)
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio)
    ctx.scale(devicePixelRatio, devicePixelRatio)
    initStars(w / devicePixelRatio, h / devicePixelRatio)

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (const s of starsRef.current) {
        const alpha = s.baseAlpha + Math.sin(t * s.speed + s.offset) * 0.35
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,195,255,${Math.max(0.05, alpha)})`
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      initStars(w / devicePixelRatio, h / devicePixelRatio)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [initStars])

  return <canvas ref={canvasRef} className="hero-starfield" />
}

/* ─── Mini chart SVG for dashboard cards ────────────────── */
function MiniChart({ color = '#7F77DD' }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" className="w-20 h-8 mt-1">
      <polyline
        points="0,25 10,22 20,18 30,20 40,12 50,15 60,8 70,10 80,4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,25 L10,22 L20,18 L30,20 L40,12 L50,15 L60,8 L70,10 L80,4 L80,30 L0,30 Z"
        fill="url(#chartGrad)"
      />
    </svg>
  )
}

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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Starfield background */}
        <Starfield />

        {/* Radial atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(127,119,221,0.10) 0%, transparent 70%)',
        }} />

        {/* Glowing planet */}
        <div className="hero-planet" aria-hidden="true" />

        {/* ── Center content ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-60 text-center w-full">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 flex justify-center"
          >
            <span className="hero-badge">Velyx Labs · AI Automation Agency</span>
          </motion.div>

          {/* Heading */}
          <h1
            className="font-display mb-6 leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 700 }}
          >
            <span className="text-white block">
              <TextReveal text="We Build AI Systems" delay={0.2} />
            </span>
            <span className="text-gradient block">
              <TextReveal text="That Scale Founders." delay={0.35} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-text-sub text-lg leading-relaxed max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            From workflow automation to full AI strategy — we engineer the intelligence
            that turns startups into category leaders.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
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
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="scroll-bounce w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-2">
              <div className="w-1 h-1.5 rounded-full bg-velyx-400" />
            </div>
            <span className="font-mono text-[10px] text-white/30 tracking-[0.25em] uppercase">Scroll Down</span>
          </motion.div>
        </div>

        {/* ── Floating dashboard cards ── */}
        <motion.div
          className="hero-card-left"
          initial={{ opacity: 0, x: -40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <GlassCard className="px-5 py-4 min-w-[200px]" hover={false}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">Revenue</span>
            </div>
            <div className="font-display text-2xl font-bold text-white">$31,740</div>
            <MiniChart color="#7F77DD" />
            <div className="mt-1 flex items-center gap-1">
              <span className="text-green-400 text-xs font-mono">+12.4%</span>
              <span className="text-white/30 text-[10px] font-mono">vs last month</span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="hero-card-right"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <GlassCard className="px-5 py-4 min-w-[190px]" hover={false}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">Automations</span>
              <span className="text-velyx-400 text-xs font-mono">42 Active</span>
            </div>
            <div className="flex items-end gap-1 mt-2">
              {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm"
                  style={{
                    height: `${h * 0.35}px`,
                    background: `rgba(127,119,221,${0.3 + (i / 10) * 0.5})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className="text-velyx-300 text-xs font-mono">+8 this week</span>
            </div>
          </GlassCard>
        </motion.div>
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
