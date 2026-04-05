import { motion } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import logo from '../../brand_assets/image.png'

/* ─── Values ─────────────────────────────────────────────── */
const VALUES = [
  {
    num: '01',
    title: 'Precision',
    desc: 'We identify exact points of leverage — no bloat, no vanity projects. Every system we build has a measurable ROI.',
    detail: 'Not every AI idea is worth building. We tell you the truth.',
  },
  {
    num: '02',
    title: 'Velocity',
    desc: 'Speed matters. We move fast, iterate quickly, and ship working systems in weeks — not months.',
    detail: 'Time is your most expensive resource. We respect it.',
  },
  {
    num: '03',
    title: 'Intelligence',
    desc: 'Every solution is built with deep understanding of the underlying AI — not just API calls.',
    detail: 'We\'ve built dozens of systems. We know what actually works.',
  },
  {
    num: '04',
    title: 'Integrity',
    desc: 'We only take on work we can genuinely deliver outstanding results on. No projects we can\'t win.',
    detail: 'If we\'re not the right fit, we\'ll tell you.',
  },
]

/* ─── Team ───────────────────────────────────────────────── */
const TEAM = [
  {
    name: 'Alex Rivera',
    role: 'Founder & AI Strategist',
    bio: 'Ex-YC founder. Built and sold 2 AI-powered startups. Now helping others do the same, faster.',
    belief: '"AI doesn\'t replace founders — it amplifies the best ones."',
    initial: 'AR',
    tags: ['AI Systems', 'Strategy', 'Fundraising'],
    gradient: 'linear-gradient(135deg, #A259FF 0%, #7F77DD 100%)',
  },
  {
    name: 'Sam Chen',
    role: 'Head of Automation',
    bio: '10+ years building enterprise automation at scale. Obsessed with systems that run without humans.',
    belief: '"The best system is the one that makes you forget it exists."',
    initial: 'SC',
    tags: ['Automation', 'Enterprise', 'No-code / Low-code'],
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #0088AA 100%)',
  },
  {
    name: 'Priya Patel',
    role: 'AI Growth Lead',
    bio: 'Former growth lead at 3 unicorns. Specializes in building AI-powered revenue engines.',
    belief: '"Growth is a system problem. Solve the system, solve the growth."',
    initial: 'PP',
    tags: ['Growth', 'Revenue Ops', 'AI Outbound'],
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
  },
]

/* ─── Myths vs Reality ───────────────────────────────────── */
const MYTHS = [
  {
    myth: 'AI agencies take 3–6 months before you see any results.',
    reality: 'We deploy working systems in 2–4 weeks.',
    realityColor: '#BF7BFF',
  },
  {
    myth: 'You\'ll get generalist teams who "know some AI" on the side.',
    reality: 'AI-native specialists who live and breathe this daily.',
    realityColor: '#33DFFF',
  },
  {
    myth: 'Agencies focus on enterprise clients — startups are an afterthought.',
    reality: 'We work exclusively with startup founders. It\'s all we do.',
    realityColor: '#BF7BFF',
  },
  {
    myth: 'You pay for hours. Results are not guaranteed.',
    reality: 'We sell outcomes. We stay until it works.',
    realityColor: '#33DFFF',
  },
  {
    myth: 'The agency owns the systems. You\'re dependent on them forever.',
    reality: 'You own everything we build. Full handover, always.',
    realityColor: '#BF7BFF',
  },
  {
    myth: 'Ongoing support means occasional emails and SOW renewals.',
    reality: 'Continuous partnership — we scale with you as you grow.',
    realityColor: '#33DFFF',
  },
]

export default function About() {
  return (
    <div className="page-wrapper">

      {/* ── Hero — emotional story-led ───────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 30%, rgba(162,89,255,0.07) 0%, transparent 65%)',
        }} />
        <GlowOrb size={700} className="left-1/2 top-[-100px]" style={{ transform: 'translateX(-50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — emotional headline */}
            <div>
              <motion.span className="eyebrow block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                About Us
              </motion.span>
              <h1 className="font-display font-bold text-white mt-3 mb-6 tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                <span className="block">
                  <TextReveal text="We Got Tired of" delay={0.2} />
                </span>
                <span className="block text-gradient">
                  <TextReveal text="Watching Founders" delay={0.42} />
                </span>
                <span className="block text-white">
                  <TextReveal text="Lose to Inefficiency." delay={0.64} />
                </span>
              </h1>
              <motion.p className="text-text-sub leading-relaxed text-lg"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
                Velyx Labs was born from a frustration: AI was transforming business, but most
                founders didn't have the technical depth to leverage it. We bridge that gap —
                bringing enterprise-grade AI systems to the startups that need them most.
              </motion.p>
              <motion.p className="text-text-muted leading-relaxed mt-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                We're not consultants who hand over slide decks. We're builders who ship working
                systems, measure real outcomes, and stay alongside you as your business grows.
              </motion.p>
            </div>

            {/* Right — timeline */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            >
              {[
                { year: '2021', event: 'Founded after personally experiencing the AI implementation gap', color: '#BF7BFF' },
                { year: '2022', event: 'First 10 founders scaled with AI systems', color: '#33DFFF' },
                { year: '2023', event: '47 automations built, $2M+ revenue generated for clients', color: '#FBBF24' },
                { year: '2024', event: '30+ founders. 98% retention. Growing.', color: '#BF7BFF' },
              ].map(({ year, event, color }, i) => (
                <motion.div
                  key={year}
                  className="flex gap-5 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <span className="font-mono text-xs font-bold flex-shrink-0 mt-1" style={{ color }}>{year}</span>
                  <div className="flex-1 pb-4 border-b border-white/5 last:border-0">
                    <p className="text-white/70 text-sm leading-relaxed">{event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(162,89,255,0.05) 0%, transparent 60%, rgba(0,212,255,0.03) 100%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="eyebrow">Our Mission</span>
            <h2 className="font-display font-bold mt-6 text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Make AI the{' '}
              <span className="text-gradient">unfair advantage</span>
              <br />
              for every ambitious founder.
            </h2>
            <p className="text-text-sub text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Not just the Fortune 500. Not just Silicon Valley unicorns. Every founder with a vision
              deserves the systems that used to be reserved for the biggest companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Values — typographic manifesto ───────────────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <span className="eyebrow">What Drives Us</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Values" />
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {VALUES.map(({ num, title, desc, detail }, i) => (
              <ScrollReveal key={num} delay={i * 0.08}>
                <div className="value-row py-8 md:py-10 cursor-default">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-velyx-400/70 flex-shrink-0 md:w-8">{num}</span>
                    <div className="flex-1">
                      <h3
                        className="font-display font-bold text-white mb-2"
                        style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}
                      >
                        {title}
                      </h3>
                      <p className="text-text-sub text-sm md:text-base leading-relaxed">{desc}</p>
                    </div>
                    <div className="md:w-72 flex-shrink-0">
                      <p className="font-mono text-xs text-velyx-400/60 leading-relaxed border-l-2 border-velyx-500/20 pl-4">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — flip cards ────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="eyebrow">The Team</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Who Builds for You" />
              </h2>
              <p className="text-text-muted text-sm mt-3">Hover to learn what we believe.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TEAM.map(({ name, role, bio, belief, initial, tags, gradient }, i) => (
              <ScrollReveal key={name} delay={i * 0.12}>
                <div className="flip-card h-[300px]">
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front glass p-7 flex flex-col">
                      {/* Avatar */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                        style={{ background: gradient }}
                      >
                        <span className="font-display font-bold text-white text-lg">{initial}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-white mb-1">{name}</h3>
                      <p className="font-mono text-xs tracking-wider mb-3" style={{ color: gradient.includes('#A259FF') ? '#BF7BFF' : gradient.includes('#00D4FF') ? '#33DFFF' : '#FBBF24' }}>
                        {role}
                      </p>
                      <p className="text-text-sub text-sm leading-relaxed">{bio}</p>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back glass p-7 flex flex-col justify-between"
                      style={{ background: 'rgba(10,10,20,0.95)', borderColor: 'rgba(162,89,255,0.3)' }}>
                      <div>
                        <p className="font-mono text-[0.6rem] text-velyx-400/60 tracking-widest uppercase mb-4">What I believe</p>
                        <p className="font-display font-bold text-white text-base leading-snug italic">{belief}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Myth vs Reality ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="eyebrow">Why Velyx</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Myth vs. Reality" />
              </h2>
              <p className="text-text-sub mt-3">What the industry tells you vs. what working with us actually looks like.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{ background: 'rgba(255,255,255,0.015)' }}>
              {/* Header */}
              <div className="grid grid-cols-2 border-b border-white/[0.07]">
                <div className="p-5 font-mono text-xs text-white/30 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/50" />
                  The Myth
                </div>
                <div className="p-5 font-mono text-xs text-velyx-400 uppercase tracking-widest border-l border-velyx-border bg-velyx-dim flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.6)' }} />
                  The Reality
                </div>
              </div>

              {MYTHS.map(({ myth, reality, realityColor }, i) => (
                <motion.div
                  key={i}
                  className="myth-row grid grid-cols-2 border-b border-white/[0.04] last:border-0"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="p-5 text-sm text-white/35 leading-relaxed">{myth}</div>
                  <div className="p-5 text-sm font-medium leading-relaxed border-l border-velyx-border bg-velyx-dim/30"
                    style={{ color: realityColor }}>
                    <span className="text-green-400 mr-2">✓</span>{reality}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 text-center overflow-hidden">
        <GlowOrb size={500} className="left-1/2 top-0" style={{ transform: 'translateX(-50%)' }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <ScrollReveal>
            <span className="eyebrow block mb-4">Ready?</span>
            <h2 className="font-display font-bold text-white mb-3 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to build with us?
            </h2>
            <p className="text-text-sub mb-8">
              We take on a limited number of founders per month. Let's see if we're the right fit.
            </p>
            <CTAButton variant="primary" to="/contact" size="lg">Book a Free Call →</CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
