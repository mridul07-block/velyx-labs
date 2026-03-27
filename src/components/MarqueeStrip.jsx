const TOOLS = [
  'OpenAI', 'Make.com', 'Zapier', 'n8n', 'Notion',
  'Slack', 'HubSpot', 'Airtable', 'Claude', 'Perplexity',
  'OpenAI', 'Make.com', 'Zapier', 'n8n', 'Notion',
  'Slack', 'HubSpot', 'Airtable', 'Claude', 'Perplexity',
]

export default function MarqueeStrip() {
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.05]">
      <div className="text-center mb-6">
        <span className="eyebrow text-white/40">
          Powered by the world's best AI tools
        </span>
      </div>

      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 h-full w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10"
        style={{ background: 'linear-gradient(-90deg, #0a0a0a, transparent)' }} />

      <div className="marquee-container overflow-hidden">
        <div
          className="marquee-track flex items-center gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 35s linear infinite' }}
        >
          {TOOLS.map((tool, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="font-mono text-sm font-medium px-6"
                style={{ color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em' }}
              >
                {tool}
              </span>
              <span style={{ color: 'rgba(127,119,221,0.4)', fontSize: '10px' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
