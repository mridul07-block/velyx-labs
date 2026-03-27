import { motion } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

const SERVICES = [
  {
    id: '01',
    title: 'AI Automation',
    tagline: 'Replace manual work with intelligent systems.',
    desc: 'We build end-to-end automation pipelines that eliminate repetitive tasks, accelerate workflows, and free your team to focus on what matters.',
    features: [
      'Lead gen automation',
      'CRM automation',
      'Content pipelines',
      'Email sequences',
      'Reporting systems',
      'Customer support AI',
    ],
    mockup: (
      <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-velyx-500" />
          <span className="text-velyx-400 tracking-wider">AUTOMATION FLOW</span>
        </div>
        {[
          { step: 'Lead Captured', status: '✓', color: 'text-green-400' },
          { step: 'CRM Updated', status: '✓', color: 'text-green-400' },
          { step: 'Email Sequence', status: '▶', color: 'text-velyx-400' },
          { step: 'Slack Notified', status: '…', color: 'text-white/40' },
        ].map(({ step, status, color }) => (
          <div key={step} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
            <span className="text-white/60">{step}</span>
            <span className={color}>{status}</span>
          </div>
        ))}
        <div className="mt-4 text-center text-velyx-400/60 text-[10px] tracking-widest uppercase">
          Running 24/7
        </div>
      </div>
    ),
  },
  {
    id: '02',
    title: 'AI Strategy & Consulting',
    tagline: 'Build your AI roadmap from day one.',
    desc: 'We help founders understand where AI creates the most leverage in their business, then build a prioritized roadmap with clear ROI milestones.',
    features: [
      'AI opportunity audit',
      'Roadmap creation',
      'Tool selection',
      'Implementation planning',
      'ROI projection',
      'Ongoing advisory',
    ],
    mockup: (
      <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-velyx-500" />
          <span className="text-velyx-400 tracking-wider">AI ROADMAP</span>
        </div>
        {[
          { phase: 'Phase 1 — Quick Wins', timeline: 'Week 1–2', pct: 30 },
          { phase: 'Phase 2 — Core Systems', timeline: 'Week 3–6', pct: 65 },
          { phase: 'Phase 3 — Scale Layer', timeline: 'Month 2–3', pct: 90 },
        ].map(({ phase, timeline, pct }) => (
          <div key={phase} className="mb-4 last:mb-0">
            <div className="flex justify-between text-white/50 mb-1.5">
              <span>{phase}</span>
              <span className="text-velyx-400">{timeline}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8">
              <div className="h-full rounded-full bg-velyx-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: '03',
    title: 'Growth Systems',
    tagline: 'AI infrastructure that scales with you.',
    desc: 'We build the revenue operations, outbound systems, and retention automation that compound over time — creating unfair advantages at every growth stage.',
    features: [
      'Revenue automation',
      'Outbound AI systems',
      'Analytics setup',
      'Retention automation',
      'Referral systems',
      'Scale infrastructure',
    ],
    mockup: (
      <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-velyx-500" />
          <span className="text-velyx-400 tracking-wider">GROWTH DASHBOARD</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'MRR', value: '+47%', up: true },
            { label: 'Churn', value: '-23%', up: false },
            { label: 'Pipeline', value: '3.2x', up: true },
            { label: 'CAC', value: '-31%', up: false },
          ].map(({ label, value, up }) => (
            <div key={label} className="bg-white/3 rounded-lg p-3">
              <div className="text-white/40 mb-1">{label}</div>
              <div className={up ? 'text-green-400 font-bold' : 'text-velyx-400 font-bold'}>{value}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-1 h-12 items-end">
          {[30,45,38,55,62,78,72,88,95].map((h,i) => (
            <div key={i} className="flex-1 rounded-t" style={{
              height: `${h}%`,
              background: `rgba(127,119,221,${0.2 + (i/9)*0.5})`,
            }} />
          ))}
        </div>
      </div>
    ),
  },
]

const PRICING = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    desc: 'Perfect for founders just getting started with AI.',
    features: ['3 automation workflows', 'AI strategy session', 'Monthly reporting', 'Email support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$5,500',
    period: '/month',
    desc: 'For scaling startups ready to go all-in on AI.',
    features: ['10 automation workflows', 'Full AI strategy', 'Bi-weekly calls', 'Priority support', 'Custom integrations'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    desc: 'Enterprise-grade AI systems for high-growth companies.',
    features: ['Unlimited automations', 'Dedicated strategist', 'Weekly calls', '24/7 support', 'Custom AI builds', 'Team training'],
    highlight: false,
  },
]

export default function Services() {
  return (
    <div className="page-wrapper">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 70% 30%, rgba(127,119,221,0.08) 0%, transparent 65%)',
        }} />
        <GlowOrb size={600} className="right-[-80px] top-[-60px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="eyebrow">Services</span>
          </motion.div>
          <h1 className="font-display font-bold text-white mt-3 tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            <TextReveal text="What We Build" delay={0.2} />
          </h1>
          <motion.p className="text-text-sub text-lg max-w-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Three core disciplines. One mission: make AI your unfair advantage.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Services deep-dive ───────────────────────────────── */}
      {SERVICES.map(({ id, title, tagline, desc, features, mockup }, idx) => (
        <section key={id} className="relative py-24 overflow-hidden">
          {idx % 2 === 0 && (
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(127,119,221,0.04) 0%, transparent 60%)',
            }} />
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              style={{ direction: idx % 2 !== 0 ? 'rtl' : 'ltr' }}>
              <div style={{ direction: 'ltr' }}>
                <ScrollReveal>
                  <span className="font-mono text-velyx-400 text-xs tracking-widest">{id}</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-3 tracking-tight">
                    <TextReveal text={title} />
                  </h2>
                  <p className="text-velyx-400 font-medium mb-4">{tagline}</p>
                  <p className="text-text-sub leading-relaxed mb-8">{desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {features.map(f => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                        <span className="w-1 h-1 rounded-full bg-velyx-500 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <CTAButton variant="primary" to="/contact">Get Started →</CTAButton>
                </ScrollReveal>
              </div>
              <ScrollReveal direction={idx % 2 !== 0 ? 'right' : 'left'} style={{ direction: 'ltr' }}>
                <GlassCard className="p-6" hover={false}>{mockup}</GlassCard>
              </ScrollReveal>
            </div>
          </div>
          {idx < SERVICES.length - 1 && <div className="section-divider mt-24" />}
        </section>
      ))}

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="eyebrow">Pricing</span>
              <h2 className="font-display font-bold text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Simple, Transparent Pricing" />
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map(({ name, price, period, desc, features, highlight }, i) => (
              <ScrollReveal key={name} delay={i * 0.1}>
                <GlassCard
                  className={`p-8 h-full flex flex-col relative ${highlight ? 'border-velyx-500' : ''}`}
                  style={highlight ? { borderColor: 'rgba(127,119,221,0.6)', boxShadow: '0 0 40px rgba(127,119,221,0.15)' } : {}}
                >
                  {highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="font-mono text-xs text-white bg-velyx-500 px-4 py-1.5 rounded-full tracking-wider">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <span className="eyebrow text-velyx-400 mb-2">{name}</span>
                  <div className="mb-2">
                    <span className="font-display font-bold text-4xl text-white">{price}</span>
                    <span className="text-text-muted text-sm">{period}</span>
                  </div>
                  <p className="text-text-sub text-sm mb-6 leading-relaxed">{desc}</p>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="rgba(127,119,221,0.5)" strokeWidth="1"/>
                          <path d="M5 8l2 2 4-4" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CTAButton variant={highlight ? 'primary' : 'secondary'} to="/contact" className="w-full justify-center">
                    Get Started
                  </CTAButton>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
