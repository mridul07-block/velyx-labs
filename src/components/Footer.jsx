import { Link } from 'react-router-dom'
import logo from '../../brand_assets/image.png'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@velyxlabs.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Top purple border */}
      <div className="h-px w-full" style={{
        background: 'linear-gradient(90deg, transparent, #A259FF 30%, #BF7BFF 50%, #A259FF 70%, transparent)'
      }} />

      {/* Watermark background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold tracking-tighter whitespace-nowrap"
          style={{
            fontSize: 'clamp(6rem, 18vw, 16rem)',
            color: 'rgba(255,255,255,0.018)',
            letterSpacing: '-0.03em',
          }}
        >
          VELYX
        </span>
      </div>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.97) 0%, #0a0a0a 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Top section: logo + newsletter + socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Logo + tagline + status */}
          <div className="flex flex-col gap-4">
            <Link to="/" data-cursor="expand">
              <img src={logo} alt="Velyx Labs" className="h-10 w-auto object-contain" />
            </Link>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
              AI Automation Agency
            </p>
            {/* Live status */}
            <div className="inline-flex items-center gap-2.5 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-[0.65rem] text-green-400/80 tracking-wide">
                Taking on 2 new clients this month
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[0.65rem] text-white/30 tracking-widest uppercase mb-3">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  data-cursor="expand"
                  className="text-sm text-white/45 hover:text-velyx-400 transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + socials */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[0.65rem] text-white/30 tracking-widest uppercase">Connect</p>
            <a
              href="mailto:hello@velyxlabs.com"
              className="text-sm text-white/45 hover:text-velyx-400 transition-colors duration-200"
            >
              hello@velyxlabs.com
            </a>
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor="expand"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center
                    text-white/40 hover:text-velyx-400 hover:border-velyx-border
                    transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-7" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/20 tracking-wide">
            © 2025 Velyx Labs · Built with AI · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-white/15">Privacy Policy</span>
            <span className="font-mono text-xs text-white/15">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
