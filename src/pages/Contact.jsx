import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

/* ─── How it works steps ─────────────────────────────────── */
const HOW_IT_WORKS = [
  { num: '01', label: 'We review your business', desc: 'Quick 15-min async review before the call', time: '15 min' },
  { num: '02', label: 'Strategy call', desc: 'We map your biggest AI opportunities together', time: '30 min' },
  { num: '03', label: 'Custom AI roadmap', desc: 'Delivered within 48hrs of the call', time: '48 hrs' },
  { num: '04', label: 'We start building', desc: 'Kick off within the same week', time: 'Same week' },
]

/* ─── Budget options ─────────────────────────────────────── */
const BUDGET_OPTIONS = [
  'Under $2,500/mo',
  '$2,500 – $5,000/mo',
  '$5,000 – $10,000/mo',
  '$10,000+/mo',
  'One-time project',
]

/* ─── Intake topics ──────────────────────────────────────── */
const TOPICS = ['AI Automation', 'AI Strategy', 'Growth Systems', 'Not sure yet']

/* ─── Form step slide variants ───────────────────────────── */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-60%' : '60%',
    opacity: 0,
  }),
}

/* ─── Multi-step form ─────────────────────────────────────── */
function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', budget: '', topic: '', message: '' })

  const totalSteps = 4

  const goNext = () => {
    setDirection(1)
    setStep(s => Math.min(s + 1, totalSteps - 1))
  }
  const goPrev = () => {
    setDirection(-1)
    setStep(s => Math.max(s - 1, 0))
  }
  const handleSubmit = () => setSubmitted(true)

  const inputBase = (field) => `
    w-full px-4 py-4 rounded-xl
    bg-dark-surface/80 text-white text-base
    border transition-all duration-200
    placeholder:text-white/25 font-body
    outline-none
    ${focused === field
      ? 'border-velyx-500 shadow-[0_0_0_3px_rgba(162,89,255,0.12)]'
      : 'border-white/10 hover:border-white/20'
    }
  `

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="w-20 h-20 rounded-2xl bg-velyx-dim border border-velyx-border flex items-center justify-center mb-6"
          style={{ boxShadow: '0 0 40px rgba(162,89,255,0.25)' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 18l8 8 12-14" stroke="#A259FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
        <p className="text-text-sub text-sm max-w-xs leading-relaxed">
          We'll review your submission and reach out within 24 hours to schedule your strategy call.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="font-mono text-xs text-green-400/80 tracking-wide">Currently accepting new clients</span>
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="step-progress mb-8">
        <div
          className="step-progress-fill"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step counter */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-white/30 tracking-widest">
          STEP {step + 1} OF {totalSteps}
        </span>
        {step > 0 && (
          <button
            onClick={goPrev}
            className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1"
          >
            ← Back
          </button>
        )}
      </div>

      {/* Step content */}
      <div className="relative overflow-hidden min-h-[240px] flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 0 && (
            <motion.div
              key="step0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <label className="font-display font-bold text-white mb-5 block"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                What's your name?
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={inputBase('name')}
                onKeyDown={e => e.key === 'Enter' && form.name && goNext()}
                autoFocus
              />
              <p className="font-mono text-xs text-white/25 mt-3">Press Enter ↵ to continue</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <label className="font-display font-bold text-white mb-5 block"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                {form.name ? `Nice to meet you, ${form.name}. What's your email?` : "What's your email?"}
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={inputBase('email')}
                onKeyDown={e => e.key === 'Enter' && form.email && goNext()}
                autoFocus
              />
              <p className="font-mono text-xs text-white/25 mt-3">Press Enter ↵ to continue</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <label className="font-display font-bold text-white mb-5 block"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                What's your monthly budget?
              </label>
              <div className="flex flex-col gap-2">
                {BUDGET_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setForm(f => ({ ...f, budget: opt })); goNext() }}
                    className={`text-left px-5 py-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      form.budget === opt
                        ? 'border border-velyx-500 bg-velyx-dim text-white'
                        : 'border border-white/10 bg-white/[0.02] text-white/60 hover:border-velyx-border hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <label className="font-display font-bold text-white mb-3 block"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                What do you need help with?
              </label>

              {/* Topic chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {TOPICS.map(t => (
                  <button
                    key={t}
                    onClick={() => setForm(f => ({ ...f, topic: t }))}
                    className={`intake-chip ${form.topic === t ? 'active' : ''}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <textarea
                rows={3}
                placeholder="Tell us about your business and what you're looking to achieve with AI..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={inputBase('message') + ' resize-none'}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      {step < 3 ? (
        <motion.button
          onClick={goNext}
          disabled={
            (step === 0 && !form.name) ||
            (step === 1 && !form.email)
          }
          className="mt-6 w-full py-4 rounded-xl font-body font-medium text-white transition-all duration-200
            flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, #A259FF, #8A42EA)', boxShadow: '0 0 30px rgba(162,89,255,0.2)' }}
          whileTap={{ scale: 0.98 }}
        >
          Continue
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      ) : (
        <motion.button
          onClick={handleSubmit}
          disabled={!form.message}
          className="mt-6 w-full py-4 rounded-xl font-body font-medium text-white transition-all duration-200
            flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, #A259FF, #8A42EA)', boxShadow: '0 0 30px rgba(162,89,255,0.2)' }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </div>
  )
}

/* ─── Main Contact page ──────────────────────────────────── */
export default function Contact() {
  return (
    <div className="page-wrapper">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pb-14 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(162,89,255,0.08) 0%, transparent 65%)',
        }} />
        <GlowOrb size={580} className="right-[-60px] top-[-80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.span className="eyebrow block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Get In Touch
          </motion.span>
          <h1 className="font-display font-bold text-white mt-3 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="block"><TextReveal text="Let's Build Something" delay={0.2} /></span>
            <span className="text-gradient block"><TextReveal text="Powerful." delay={0.55} /></span>
          </h1>
          <motion.p className="text-text-sub text-lg max-w-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            Tell us about your business — we'll tell you exactly how AI can transform it.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Two-column contact ───────────────────────────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — how it works */}
            <div>
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl text-white mb-10">How it works</h2>
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-5 top-5 bottom-5 timeline-line hidden md:block" />

                  <div className="flex flex-col gap-0">
                    {HOW_IT_WORKS.map(({ num, label, desc, time }, i) => (
                      <motion.div
                        key={num}
                        className="flex gap-5 pb-8 last:pb-0"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {/* Circle node */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10"
                          style={{
                            background: 'rgba(162,89,255,0.1)',
                            border: '1.5px solid rgba(162,89,255,0.3)',
                          }}>
                          <span className="font-mono text-xs text-velyx-400 font-bold">{num}</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="font-display font-semibold text-white text-sm">{label}</p>
                            <span
                              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#33DFFF' }}
                            >
                              {time}
                            </span>
                          </div>
                          <p className="text-text-muted text-sm">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct contact */}
              <ScrollReveal>
                <div className="mt-12 glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-white mb-4 text-sm">Or reach us directly</h3>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:hello@velyxlabs.com" data-cursor="expand"
                      className="flex items-center gap-3 text-sm text-text-sub hover:text-velyx-400 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-velyx-dim border border-velyx-border flex items-center justify-center text-velyx-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      </div>
                      hello@velyxlabs.com
                    </a>
                    <a href="#" data-cursor="expand"
                      className="flex items-center gap-3 text-sm text-text-sub hover:text-velyx-400 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-velyx-dim border border-velyx-border flex items-center justify-center text-velyx-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                      </div>
                      linkedin.com/company/velyx-labs
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — multi-step form */}
            <ScrollReveal direction="left">
              <GlassCard className="p-8 md:p-10" hover={false}>
                <div className="mb-6">
                  <h2 className="font-display font-bold text-xl text-white mb-1">Start the conversation</h2>
                  <p className="text-text-muted text-sm">Takes about 2 minutes. We respond within 24 hours.</p>
                </div>
                <MultiStepForm />
              </GlassCard>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Sticky bottom contact options ─────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                  label: 'Connect on LinkedIn',
                  href: '#',
                  color: '#33DFFF',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                  label: 'hello@velyxlabs.com',
                  href: 'mailto:hello@velyxlabs.com',
                  color: '#BF7BFF',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                  ),
                  label: 'Book a 30-min Call',
                  href: '#',
                  color: '#FBBF24',
                },
              ].map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  data-cursor="expand"
                  className="glass glass-hover rounded-2xl px-7 py-4 flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: color + '12', border: `1px solid ${color}30`, color }}
                  >
                    {icon}
                  </div>
                  <span className="font-medium text-sm text-white/70 group-hover:text-white transition-colors">{label}</span>
                  <svg className="ml-2 text-white/20 group-hover:text-white/60 transition-colors" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
