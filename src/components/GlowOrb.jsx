export default function GlowOrb({ size = 700, className = '', style = {} }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        position: 'absolute',
        borderRadius: '50%',
        background: `radial-gradient(circle at 38% 35%,
          rgba(127,119,221,0.55) 0%,
          rgba(127,119,221,0.28) 28%,
          rgba(127,119,221,0.08) 55%,
          transparent 72%
        )`,
        filter: 'blur(28px)',
        animation: 'pulseOrb 5s ease-in-out infinite',
        ...style,
      }}
    >
      {/* Inner bright core */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: size * 0.22,
        height: size * 0.22,
        borderRadius: '50%',
        background: 'rgba(155,148,232,0.55)',
        filter: 'blur(16px)',
      }} />
      {/* Outer glow ring */}
      <div style={{
        position: 'absolute',
        inset: '-15%',
        borderRadius: '50%',
        background: `radial-gradient(circle, transparent 60%, rgba(127,119,221,0.06) 80%, transparent 100%)`,
        filter: 'blur(40px)',
      }} />
    </div>
  )
}
