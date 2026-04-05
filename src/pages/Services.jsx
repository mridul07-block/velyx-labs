import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'

/* ─── Animated node-graph mockup ────────────────────────── */
function NodeGraphMockup() {
  const steps = [
    { label: 'Lead Captured', status: 'done', x: 20, y: 25 },
    { label: 'CRM Updated', status: 'done', x: 50, y: 15 },
    { label: 'Email Sequence', status: 'active', x: 80, y: 25 },
    { label: 'Slack Notified', status: 'pending', x: 50, y: 60 },
    { label: 'Report Generated', status: 'pending', x: 20, y: 60 },
  ]
  return (
    <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs relative">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-velyx-500 animate-pulse" />
        <span className="text-velyx-400 tracking-wider">AUTOMATION FLOW</span>
        <span className="ml-auto text-green-400/60">● LIVE</span>
      </div>
      {/* SVG node graph */}
      <svg className="w-full" viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Edges */}
        <path d="M60 35 Q90 25 140 28" stroke="rgba(162,89,255,0.4)" strokeWidth="1.5" strokeDasharray="4 3"
          style={{ animation: 'flowDash 1.5s linear infinite' }} />
        <path d="M160 28 Q200 25 230 35" stroke="rgba(162,89,255,0.4)" strokeWidth="1.5" strokeDasharray="4 3"
          style={{ animation: 'flowDash 1.5s linear infinite 0.3s' }} />
        <path d="M150 30 L150 72" stroke="rgba(162,89,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M140 80 Q100 80 70 75" stroke="rgba(162,89,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Nodes */}
        {steps.map(({ label, status, x, y }, i) => (
          <g key={i} transform={`translate(${x * 2.8}, ${y * 1.3})`}
            style={{ animation: `nodePulse ${2 + i * 0.4}s ease-in-out infinite ${i * 0.2}s` }}>
            <circle r="6"
              fill={status === 'done' ? 'rgba(34,197,94,0.2)' : status === 'active' ? 'rgba(162,89,255,0.3)' : 'rgba(255,255,255,0.05)'}
              stroke={status === 'done' ? '#22c55e' : status === 'active' ? '#A259FF' : 'rgba(255,255,255,0.15)'}
              strokeWidth="1.5" />
            {status === 'done' && <path d="M-2.5 0 l2 2 4-4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" />}
            {status === 'active' && <circle r="2.5" fill="#A259FF" />}
            <text x="0" y="16" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">{label}</text>
          </g>
        ))}
      </svg>
      <div className="mt-3 text-center text-velyx-400/50 text-[10px] tracking-widest uppercase border-t border-white/5 pt-3">
        Running 24/7 · 0 human intervention required
      </div>
    </div>
  )
}

/* ─── Gantt chart mockup ─────────────────────────────────── */
function GanttMockup() {
  const phases = [
    { phase: 'Phase 1 — Quick Wins', timeline: 'Week 1–2', pct: 100, color: '#22c55e' },
    { phase: 'Phase 2 — Core Systems', timeline: 'Week 3–6', pct: 65, color: '#A259FF' },
    { phase: 'Phase 3 — Scale Layer', timeline: 'Month 2–3', pct: 20, color: '#33DFFF' },
  ]
  return (
    <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-velyx-500" />
        <span className="text-velyx-400 tracking-wider">AI ROADMAP</span>
      </div>
      {/* Phases */}
      {phases.map(({ phase, timeline, pct, color }, i) => (
        <div key={i} className="mb-5 last:mb-0">
          <div className="flex justify-between mb-2">
            <span className="text-white/60">{phase}</span>
            <span style={{ color }} className="font-bold">{timeline}</span>
          </div>
          {/* Gantt bar */}
          <div className="h-5 rounded-md bg-white/[0.04] overflow-hidden relative">
            <motion.div
              className="h-full rounded-md"
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ background: `linear-gradient(90deg, ${color}40, ${color}80)`, border: `1px solid ${color}40` }}
            />
            <div className="absolute inset-0 flex items-center px-2">
              <span className="text-white/40 text-[9px] tracking-widest">
                {i === 0 ? 'COMPLETE' : i === 1 ? 'IN PROGRESS' : 'UPCOMING'}
              </span>
            </div>
          </div>
        </div>
      ))}
      {/* Milestones */}
      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between">
        {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'M2', 'M3'].map((w, i) => (
          <span key={i} className="text-white/20 text-[9px]">{w}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Growth dashboard mockup ───────────────────────────── */
function GrowthDashboardMockup() {
  const metrics = [
    { label: 'MRR', value: '+47%', positive: true },
    { label: 'Churn', value: '-23%', positive: false },
    { label: 'Pipeline', value: '3.2x', positive: true },
    { label: 'CAC', value: '-31%', positive: false },
  ]
  const chartData = [30, 45, 38, 55, 62, 78, 72, 88, 95]
  const linePoints = chartData.map((v, i) => `${(i / (chartData.length - 1)) * 100},${100 - v}`).join(' ')

  return (
    <div className="rounded-xl border border-velyx-border bg-dark-elevated p-5 font-mono text-xs">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-velyx-500 animate-pulse" />
        <span className="text-velyx-400 tracking-wider">GROWTH DASHBOARD</span>
        <span className="ml-auto text-white/30">Live</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {metrics.map(({ label, value, positive }) => (
          <div key={label} className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.04]">
            <div className="text-white/40 mb-1.5 text-[10px]">{label}</div>
            <div className="font-bold text-base" style={{ color: positive ? '#22c55e' : '#33DFFF' }}>{value}</div>
          </div>
        ))}
      </div>
      {/* Animated line chart */}
      <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
        <div className="text-white/30 text-[10px] mb-2">Revenue trend ↗</div>
        <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(162,89,255,0.4)" />
              <stop offset="100%" stopColor="rgba(162,89,255,0)" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,100 ${linePoints} 100,100`}
            fill="url(#chartGrad)"
          />
          <motion.polyline
            points={linePoints}
            fill="none"
            stroke="#A259FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>
      </div>
    </div>
  )
}

/* ─── Value Meter ────────────────────────────────────────── */
function ValueMeter({ pct, color, inView }) {
  return (
    <div className="value-meter">
      <div
        className="value-meter-fill"
        style={{
          width: inView ? `${pct}%` : '0%',
          background: `linear-gradient(90deg, ${color}60, ${color})`,
        }}
      />
    </div>
  )
}

/* ─── Services data ──────────────────────────────────────── */
const SERVICES = [
  {
    id: '01',
    title: 'AI Automation',
    tagline: 'Replace manual work with intelligent systems.',
    desc: 'We build end-to-end automation pipelines that eliminate repetitive tasks, accelerate workflows, and free your team to focus on what matters.',
    features: ['Lead gen automation', 'CRM automation', 'Content pipelines', 'Email sequences', 'Reporting systems', 'Customer support AI'],
    mockup: <NodeGraphMockup />,
    accent: '#BF7BFF',
    accentDim: 'rgba(162,89,255,0.08)',
  },
  {
    id: '02',
    title: 'AI Strategy & Consulting',
    tagline: 'Build your AI roadmap from day one.',
    desc: 'We help founders understand where AI creates the most leverage in their business, then build a prioritized roadmap with clear ROI milestones.',
    features: ['AI opportunity audit', 'Roadmap creation', 'Tool selection', 'Implementation planning', 'ROI projection', 'Ongoing advisory'],
    mockup: <GanttMockup />,
    accent: '#33DFFF',
    accentDim: 'rgba(0,212,255,0.06)',
  },
  {
    id: '03',
    title: 'Growth Systems',
    tagline: 'AI infrastructure that scales with you.',
    desc: 'We build the revenue operations, outbound systems, and retention automation that compound over time — creating unfair advantages at every growth stage.',
    features: ['Revenue automation', 'Outbound AI systems', 'Analytics setup', 'Retention automation', 'Referral systems', 'Scale infrastructure'],
    mockup: <GrowthDashboardMockup />,
    accent: '#FBBF24',
    accentDim: 'rgba(245,158,11,0.06)',
  },
]

/* ─── Pricing data ───────────────────────────────────────── */
const PRICING = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    desc: 'Perfect for founders just getting started with AI.',
    features: ['3 automation workflows', 'AI strategy session', 'Monthly reporting', 'Email support'],
    highlight: false,
    meter: 30,
    meterColor: '#BF7BFF',
  },
  {
    name: 'Growth',
    price: '$5,500',
    period: '/month',
    desc: 'For scaling startups ready to go all-in on AI.',
    features: ['10 automation workflows', 'Full AI strategy', 'Bi-weekly calls', 'Priority support', 'Custom integrations'],
    highlight: true,
    meter: 70,
    meterColor: '#A259FF',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    desc: 'Enterprise-grade AI systems for high-growth companies.',
    features: ['Unlimited automations', 'Dedicated strategist', 'Weekly calls', '24/7 support', 'Custom AI builds', 'Team training'],
    highlight: false,
    meter: 100,
    meterColor: '#33DFFF',
  },
]

/* ─── Pricing card component (hooks need to be top-level) ── */
function PricingCard({ plan, index }) {
  const { name, price, period, desc, features, highlight, meter, meterColor } = plan
  const meterRef = useRef(null)
  const meterInView = useInView(meterRef, { once: true })

  return (
    <ScrollReveal delay={index * 0.1}
      className={`flex-1 ${highlight ? 'md:-mt-4 md:mb-4 z-10' : 'z-0'}`}
    >
      <GlassCard
        className={`p-7 md:p-8 h-full flex flex-col relative ${highlight ? 'md:p-10' : ''}`}
        style={highlight ? {
          borderColor: 'rgba(162,89,255,0.55)',
          boxShadow: '0 0 60px rgba(162,89,255,0.2), 0 16px 48px rgba(0,0,0,0.5)',
        } : {
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        {highlight && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="font-mono text-xs text-white bg-velyx-500 px-4 py-1.5 rounded-full tracking-wider">
              MOST POPULAR
            </span>
          </div>
        )}
        <div className="mb-1">
          <span className="font-mono text-xs tracking-widest" style={{ color: meterColor }}>{name.toUpperCase()}</span>
        </div>
        <div className="flex items-baseline gap-1 mb-1">
          <span
            className="font-display font-bold"
            style={{ fontSize: highlight ? '3.5rem' : '2.8rem', color: 'white', lineHeight: 1 }}
          >
            {price}
          </span>
          {period && <span className="text-text-muted text-sm">{period}</span>}
        </div>
        <div className="mb-5 mt-2" ref={meterRef}>
          <div className="flex justify-between text-[10px] font-mono text-white/30 mb-1.5">
            <span>AI coverage</span>
            <span style={{ color: meterColor }}>{meter}%</span>
          </div>
          <ValueMeter pct={meter} color={meterColor} inView={meterInView} />
        </div>
        <p className="text-text-sub text-sm mb-6 leading-relaxed">{desc}</p>
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map(f => (
            <li key={f} className="flex items-center gap-3 text-sm text-white/75">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${meterColor}20`, border: `1px solid ${meterColor}40` }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3" stroke={meterColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
        <CTAButton variant={highlight ? 'primary' : 'secondary'} to="/contact" className="w-full justify-center">
          Get Started
        </CTAButton>
      </GlassCard>
    </ScrollReveal>
  )
}

export default function Services() {
  return (
    <div className="page-wrapper">

      {/* ── Hero — Visual service panels ───────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 60% 20%, rgba(162,89,255,0.07) 0%, transparent 60%)',
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

          {/* Service panels quick nav */}
          <motion.div
            className="flex gap-3 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          >
            {SERVICES.map(({ id, title, accent }) => (
              <a
                key={id}
                href={`#service-${id}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = accent + '60'
                  e.currentTarget.style.color = accent
                  e.currentTarget.style.background = accent + '10'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <span className="font-mono text-xs opacity-60">{id}</span>
                {title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Services deep-dive ───────────────────────────────── */}
      {SERVICES.map(({ id, title, tagline, desc, features, mockup, accent, accentDim }, idx) => (
        <section key={id} id={`service-${id}`} className="relative py-24 overflow-hidden">
          {/* Ambient tint */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 50% 60% at ${idx % 2 === 0 ? '90%' : '10%'} 50%, ${accentDim} 0%, transparent 65%)`,
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              style={{ direction: idx % 2 !== 0 ? 'rtl' : 'ltr' }}
            >
              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs tracking-widest" style={{ color: accent }}>{id}</span>
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }} />
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">
                    <TextReveal text={title} />
                  </h2>
                  <p className="font-medium mb-4 text-base" style={{ color: accent }}>{tagline}</p>
                  <p className="text-text-sub leading-relaxed mb-8">{desc}</p>
                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {features.map((f, i) => (
                      <motion.span
                        key={f}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: accentDim,
                          border: `1px solid ${accent}35`,
                          color: accent,
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                  <CTAButton variant="primary" to="/contact">Get Started →</CTAButton>
                </ScrollReveal>
              </div>

              {/* Mockup */}
              <ScrollReveal direction={idx % 2 !== 0 ? 'right' : 'left'} style={{ direction: 'ltr' }}>
                <GlassCard className="p-6" hover={false}
                  style={{ borderColor: `${accent}25` }}>
                  {mockup}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>

          {idx < SERVICES.length - 1 && <div className="section-divider mt-24" />}
        </section>
      ))}

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(162,89,255,0.04) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="eyebrow">Pricing</span>
              <h2 className="font-display font-bold text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Simple, Transparent Pricing" />
              </h2>
              <p className="text-text-sub mt-4 max-w-lg mx-auto">
                No bloated retainers. No vague deliverables. You always know what you're getting.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing cards — Growth card is taller/larger */}
          <div className="flex flex-col md:flex-row gap-0 items-stretch justify-center max-w-4xl mx-auto">
            {PRICING.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <ScrollReveal>
            <p className="text-center text-text-muted text-sm mt-10">
              Not sure which plan? <Link to="/contact" className="text-velyx-400 hover:text-velyx-300 transition-colors">Book a free strategy call</Link> — we'll tell you exactly what you need.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
