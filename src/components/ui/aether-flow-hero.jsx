import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import CTAButton from '../CTAButton';

const AetherFlowHero = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 180 };

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        // Velyx brand purple
        this.color = 'rgba(162, 89, 255, 0.85)';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        particles.push(new Particle(x, y, directionX, directionY, size));
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;

          const threshold = (canvas.width / 7) * (canvas.height / 7);
          if (distance < threshold) {
            const opacityValue = 1 - distance / 20000;

            const dxA = particles[a].x - mouse.x;
            const dyA = particles[a].y - mouse.y;
            const distMouse = Math.sqrt(dxA * dxA + dyA * dyA);
            const nearCursor = mouse.x !== null && distMouse < mouse.radius;

            ctx.strokeStyle = nearCursor
              ? `rgba(191, 123, 255, ${opacityValue})`   // velyx-400 near cursor
              : `rgba(162, 89, 255, ${opacityValue * 0.6})`; // velyx-500 default
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Brand dark background (#050505)
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.18 + 0.1,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Particle canvas — full-screen background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* Spotlight ray */}
      <div className="hero-spotlight" />

      {/* Atmospheric violet glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(127,119,221,0.10) 0%, transparent 68%)',
          zIndex: 3,
        }}
      />

      {/* Text legibility scrim */}
      <div className="hero-text-scrim" aria-hidden="true" />

      {/* Hero content — pointer-events none so canvas receives mouse events in open areas */}
      <div className="hero-content-layout" style={{ zIndex: 10, pointerEvents: 'none' }}>

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-7"
        >
          <span className="hero-badge">
            <Zap className="w-3 h-3 text-velyx-400 shrink-0" aria-hidden="true" />
            Velyx Labs · AI Automation Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display mb-6 leading-[1.05] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 700 }}
        >
          <span className="text-white block">We Build AI Systems</span>
          <span className="text-gradient block">That Scale Founders.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-text-sub text-lg leading-relaxed max-w-xl mb-8"
        >
          From workflow automation to full AI strategy — we engineer the intelligence
          that turns startups into category leaders.
        </motion.p>

        {/* Service tags */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center mb-9"
        >
          {['AI Automation', 'AI Integration', 'Web Development', 'AI Strategy', 'Growth Systems'].map((s) => (
            <span key={s} className="hero-service-tag">{s}</span>
          ))}
        </motion.div>

        {/* CTA buttons — restore pointer-events so they're clickable */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 justify-center mb-9"
          style={{ pointerEvents: 'auto' }}
        >
          <CTAButton variant="primary" to="/contact" size="lg">
            Start Scaling
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CTAButton>
          <CTAButton variant="secondary" to="/portfolio" size="lg">
            See Our Work
          </CTAButton>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 justify-center mb-14"
        >
          <div className="flex -space-x-2">
            {[0.35, 0.45, 0.55, 0.65].map((opacity, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border border-velyx-400/30"
                style={{
                  background: `linear-gradient(135deg, rgba(127,119,221,${opacity}) 0%, rgba(162,89,255,${opacity - 0.1}) 100%)`,
                }}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-white/40">
            Trusted by <span className="text-velyx-400 font-semibold">30+ founders</span> worldwide
          </span>
          <span className="text-white/15 font-mono text-xs">·</span>
          <span className="font-mono text-xs text-white/40">
            <span className="text-velyx-400 font-semibold">2,400+</span> hrs saved monthly
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <div className="scroll-bounce w-6 h-9 rounded-full border border-white/20 flex items-start justify-center pt-2">
            <div className="w-1 h-1.5 rounded-full bg-velyx-400" />
          </div>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.25em] uppercase">Scroll Down</span>
        </motion.div>

      </div>
    </section>
  );
};

export default AetherFlowHero;
