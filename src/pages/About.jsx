import { motion } from 'framer-motion'
import GlowOrb from '../components/GlowOrb'
import GlassCard from '../components/GlassCard'
import CTAButton from '../components/CTAButton'
import ScrollReveal from '../components/ScrollReveal'
import TextReveal from '../components/TextReveal'
import logo from '../../brand_assets/image.png'

const VALUES = [
  {
    icon: '🎯',
    title: 'Precision',
    desc: 'We identify exact points of leverage — no bloat, no vanity projects.',
  },
  {
    icon: '⚡',
    title: 'Velocity',
    desc: 'Speed matters. We move fast, iterate quickly, and ship working systems.',
  },
  {
    icon: '🧠',
    title: 'Intelligence',
    desc: 'Every solution is built with deep understanding of the underlying AI.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: 'We only take on work we can genuinely deliver outstanding results on.',
  },
]

const TEAM = [
  {
    name: 'Alex Rivera',
    role: 'Founder & AI Strategist',
    bio: 'Ex-YC founder. Built and sold 2 AI-powered startups. Now helping others do the same, faster.',
    initial: 'AR',
  },
  {
    name: 'Sam Chen',
    role: 'Head of Automation',
    bio: '10+ years building enterprise automation at scale. Obsessed with systems that run without humans.',
    initial: 'SC',
  },
  {
    name: 'Priya Patel',
    role: 'AI Growth Lead',
    bio: 'Former growth lead at 3 unicorns. Specializes in building AI-powered revenue engines.',
    initial: 'PP',
  },
]

const COMPARISON = [
  { metric: 'Time to deploy', agency: '3–6 months', velyx: '2–4 weeks' },
  { metric: 'AI expertise', agency: 'Generalist teams', velyx: 'AI-native specialists' },
  { metric: 'Founder focus', agency: 'Enterprise clients', velyx: 'Startup founders' },
  { metric: 'Results focus', agency: 'Hours billed', velyx: 'Outcomes achieved' },
  { metric: 'Ongoing support', agency: 'SOW-based', velyx: 'Continuous partnership' },
  { metric: 'Systems ownership', agency: 'Agency-dependent', velyx: 'You own everything' },
]

export default function About() {
  return (
    <div className="page-wrapper">

      {/* ── Hero split ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-36 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 30%, rgba(127,119,221,0.08) 0%, transparent 65%)',
        }} />
        <GlowOrb size={700} className="left-1/2 top-[-100px]" style={{ transform: 'translateX(-50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — story */}
            <div>
              <motion.span className="eyebrow block" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                About Us
              </motion.span>
              <h1 className="font-display font-bold text-white mt-3 mb-6 tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
                <span className="block"><TextReveal text="Built by Founders," delay={0.2} /></span>
                <span className="block"><TextReveal text="For Founders" delay={0.42} /></span>
              </h1>
              <motion.p className="text-text-sub leading-relaxed text-lg"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                Velyx Labs was born from a frustration: AI was transforming business, but most
                founders didn't have the technical depth to leverage it. We bridge that gap —
                bringing enterprise-grade AI systems to the startups that need them most.
              </motion.p>
              <motion.p className="text-text-muted leading-relaxed mt-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }}>
                We're not consultants who hand over slide decks. We're builders who ship working
                systems, measure real outcomes, and stay alongside you as your business grows.
              </motion.p>
            </div>

            {/* Right — logo + tagline */}
            <motion.div className="flex flex-col items-center gap-6 lg:items-end"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <GlassCard className="p-12 flex flex-col items-center gap-5" hover={false}>
                <img src={logo} alt="Velyx Labs" className="h-24 w-auto object-contain" />
                <div className="text-center">
                  <p className="font-mono text-xs text-velyx-400 tracking-widest uppercase">
                    Make AI the unfair advantage
                  </p>
                  <p className="font-mono text-xs text-white/30 tracking-widest uppercase mt-1">
                    for every ambitious founder
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(127,119,221,0.06) 0%, transparent 60%, rgba(127,119,221,0.03) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center py-8 px-4">
              <span className="eyebrow">Our Mission</span>
              <h2 className="font-display font-bold mt-6 text-white leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Make AI the{' '}
                <span className="text-velyx-400">unfair advantage</span>
                <br />
                for every ambitious founder.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Values bento ─────────────────────────────────────── */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="eyebrow">What Drives Us</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Our Values" />
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <GlassCard className="p-7 h-full border-top-violet">
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="eyebrow">The Team</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Who Builds for You" />
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TEAM.map(({ name, role, bio, initial }, i) => (
              <ScrollReveal key={name} delay={i * 0.1}>
                <GlassCard className="p-7">
                  <div className="w-14 h-14 rounded-2xl bg-velyx-dim border border-velyx-border flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-velyx-400 text-lg">{initial}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">{name}</h3>
                  <p className="font-mono text-xs text-velyx-400 tracking-wider mb-3">{role}</p>
                  <p className="text-text-sub text-sm leading-relaxed">{bio}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="eyebrow">Why Velyx</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                <TextReveal text="Not Your Typical Agency" />
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard className="overflow-hidden" hover={false}>
              {/* Header */}
              <div className="grid grid-cols-3 bg-dark-elevated border-b border-white/[0.06]">
                <div className="col-span-1 p-5 font-mono text-xs text-white/30 uppercase tracking-widest">Metric</div>
                <div className="p-5 font-mono text-xs text-white/40 uppercase tracking-widest border-l border-white/[0.06]">Traditional Agency</div>
                <div className="p-5 font-mono text-xs text-velyx-400 uppercase tracking-widest border-l border-velyx-border bg-velyx-dim">Velyx Labs</div>
              </div>

              {COMPARISON.map(({ metric, agency, velyx }, i) => (
                <motion.div
                  key={metric}
                  className="grid grid-cols-3 border-b border-white/[0.05] last:border-0"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="p-5 text-sm text-white/60 font-medium">{metric}</div>
                  <div className="p-5 text-sm text-white/35 border-l border-white/[0.05]">{agency}</div>
                  <div className="p-5 text-sm text-white font-medium border-l border-velyx-border bg-velyx-dim/50">
                    <span className="text-velyx-400">✓</span> {velyx}
                  </div>
                </motion.div>
              ))}
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-20 text-center overflow-hidden">
        <GlowOrb size={400} className="left-1/2 top-0" style={{ transform: 'translateX(-50%)' }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-white mb-5 tracking-tight">
              Ready to build with us?
            </h2>
            <CTAButton variant="primary" to="/contact" size="lg">Book a Free Call →</CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
