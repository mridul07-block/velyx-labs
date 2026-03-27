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
    <footer className="relative z-10 border-t-2 border-velyx-500">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(13,13,24,0.98) 0%, #0a0a0a 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" data-cursor="expand">
              <img src={logo} alt="Velyx Labs" className="h-10 w-auto object-contain" />
            </Link>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
              AI Automation Agency
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                data-cursor="expand"
                className="text-sm text-white/45 hover:text-velyx-400 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
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

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/25 tracking-wide">
            © 2025 Velyx Labs · Built with AI
          </p>
          <p className="font-mono text-xs text-white/20 tracking-wide">
            hello@velyxlabs.com
          </p>
        </div>
      </div>
    </footer>
  )
}
