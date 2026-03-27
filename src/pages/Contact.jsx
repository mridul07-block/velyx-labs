import { useState } from 'react'
import { motion } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

const PROCESS = [
  { num: '01', label: 'We review your business', desc: 'Quick 15-min async review before the call' },
  { num: '02', label: 'Strategy call (30 mins)', desc: 'We map your biggest AI opportunities' },
  { num: '03', label: 'Custom AI roadmap', desc: 'Delivered within 48hrs of the call' },
  { num: '04', label: 'We start building', desc: 'Kick off within the same week' },
]

const BUDGET_OPTIONS = [
  'Under $2,500/mo',
  '$2,500 – $5,000/mo',
  '$5,000 – $10,000/mo',
  '$10,000+/mo',
  'One-time project',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = (field) => `
    w-full px-4 py-3.5 rounded-xl
    bg-dark-surface/80 text-white text-sm
    border transition-all duration-200
    placeholder:text-white/25 font-body
    outline-none
    ${focused === field
      ? 'border-velyx-500 shadow-[0_0_0_3px_rgba(127,119,221,0.15)]'
      : 'border-white/10 hover:border-white/20'
    }
  `

  return (
    <div className="page-wrapper">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end pb-14 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(127,119,221,0.08) 0%, transparent 65%)',
        }} />
        <GlowOrb size={580} className="right-[-60px] top-[-80px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.span className="eyebrow block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Get In Touch
          </motion.span>
          <h1 className="font-display font-bold text-white mt-3 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
            <span className="block"><TextReveal text="Let's Build Something" delay={0.2} /></span>
            <span className="text-velyx-400 block"><TextReveal text="Powerful" delay={0.55} /></span>
          </h1>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Two-column contact ───────────────────────────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — info + process */}
            <div>
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl text-white mb-8">How it works</h2>
                <div className="flex flex-col gap-6 mb-12">
                  {PROCESS.map(({ num, label, desc }, i) => (
                    <motion.div
                      key={num}
                      className="flex gap-5"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl glass flex items-center justify-center">
                        <span className="font-mono text-xs text-velyx-400 font-bold">{num}</span>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-white text-sm mb-1">{label}</p>
                        <p className="text-text-muted text-sm">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-white mb-4">Or reach us directly</h3>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:hello@velyxlabs.com" data-cursor="expand"
                      className="flex items-center gap-3 text-sm text-text-sub hover:text-velyx-400 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      hello@velyxlabs.com
                    </a>
                    <a href="#" data-cursor="expand"
                      className="flex items-center gap-3 text-sm text-text-sub hover:text-velyx-400 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                      linkedin.com/company/velyx-labs
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — contact form */}
            <ScrollReveal direction="left">
              <GlassCard className="p-8" hover={false}>
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-velyx-dim border border-velyx-border flex items-center justify-center mb-6">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14l6 6 10-12" stroke="#7F77DD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3">Message Sent!</h3>
                    <p className="text-text-sub text-sm max-w-xs">
                      We'll review your submission and reach out within 24 hours to schedule your strategy call.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-xs text-white/40 tracking-wider block mb-2">NAME</label>
                        <input
                          type="text" name="name" required
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('name')}
                        />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-white/40 tracking-wider block mb-2">EMAIL</label>
                        <input
                          type="email" name="email" required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-white/40 tracking-wider block mb-2">COMPANY</label>
                      <input
                        type="text" name="company"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={handleChange}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('company')}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs text-white/40 tracking-wider block mb-2">BUDGET RANGE</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        onFocus={() => setFocused('budget')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('budget') + ' cursor-pointer'}
                        style={{ appearance: 'none' }}
                      >
                        <option value="" disabled>Select budget range</option>
                        {BUDGET_OPTIONS.map(o => (
                          <option key={o} value={o} style={{ background: '#0d0d18', color: '#fff' }}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-xs text-white/40 tracking-wider block mb-2">MESSAGE</label>
                      <textarea
                        name="message" required rows={4}
                        placeholder="Tell us about your business and what you're looking to achieve with AI..."
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={inputClass('message') + ' resize-none'}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      data-cursor="expand"
                      className="w-full py-4 px-6 rounded-xl bg-velyx-500 text-white font-body font-medium
                        border border-velyx-500 hover:bg-velyx-400 hover:border-velyx-400
                        transition-colors duration-200 shadow-glow-sm hover:shadow-glow
                        flex items-center justify-center gap-2 mt-2"
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Bottom contact options ────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="section-divider absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
                label: 'LinkedIn',
                href: '#',
                desc: 'Connect with us',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
                label: 'Email Directly',
                href: 'mailto:hello@velyxlabs.com',
                desc: 'hello@velyxlabs.com',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                ),
                label: 'Book a Call',
                href: '#',
                desc: '30-min strategy session',
              },
            ].map(({ icon, label, href, desc }) => (
              <ScrollReveal key={label}>
                <a href={href} data-cursor="expand"
                  className="glass glass-hover rounded-2xl p-6 flex items-center gap-5 group block"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-velyx-dim border border-velyx-border flex items-center justify-center text-velyx-500 flex-shrink-0 group-hover:text-velyx-300 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-sm mb-0.5">{label}</p>
                    <p className="text-text-muted text-xs">{desc}</p>
                  </div>
                  <svg className="ml-auto text-white/20 group-hover:text-velyx-400 transition-colors" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
