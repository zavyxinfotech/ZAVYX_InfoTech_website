import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Bot, 
  MessageSquare, 
  Database, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Cpu
} from 'lucide-react';

/**
 * Interactive canvas particle & constellation system
 */
function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Responsive particle count and connection threshold
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 24 : 52;
    const connectionDistance = isMobile ? 85 : 125;
    const mouseRadius = isMobile ? 80 : 140;

    let mouse = {
      x: null,
      y: null,
      radius: mouseRadius,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave, { passive: true });

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6);
        this.radius = Math.random() * (isMobile ? 1.8 : 2.4) + 1;
        // Brand themed colors (Cyan, Blue, Teal, Indigo)
        const colors = [
          'rgba(2, 132, 199, ',   // brand-500
          'rgba(14, 165, 233, ',  // sky-500
          'rgba(20, 184, 166, ',  // accent-500
          'rgba(99, 102, 241, ',  // indigo-500
        ];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.45 + 0.25;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Normal movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from edges with padding
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Subtle pulsing alpha
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.15;

        // Mouse interaction (soft attraction / repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (1 - distance / mouse.radius) * 0.8;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 1.5;
            this.y -= Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor}${Math.max(0.05, Math.min(1, this.alpha))})`;
        ctx.fill();

        // Optional tiny glow ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor}${Math.max(0.01, this.alpha * 0.15)})`;
        ctx.fill();
      }
    }

    let particles = [];
    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * (isMobile ? 0.12 : 0.18);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/**
 * Main Hero Background Animation Suite
 */
export default function HeroBackgroundAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      
      {/* 1. Dynamic Luminous Fluid Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-Center Main Glow */}
        <motion.div
          animate={{
            scale: [1, 1.18, 0.95, 1],
            x: ['-50%', '-48%', '-52%', '-50%'],
            y: ['-20%', '-15%', '-25%', '-20%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/2 w-[340px] sm:w-[620px] lg:w-[800px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-brand-400/25 via-accent-300/20 to-indigo-400/20 blur-[75px] sm:blur-[115px] rounded-full"
        />

        {/* Left Floating Neon Accent Orb */}
        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -40, 25, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-20 sm:left-[-5%] w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-gradient-to-br from-accent-400/20 via-brand-500/15 to-transparent blur-[65px] sm:blur-[95px] rounded-full"
        />

        {/* Right Floating Indigo/Sky Glow */}
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 35, -30, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/3 -right-20 sm:right-[-5%] w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-gradient-to-bl from-indigo-500/18 via-sky-400/20 to-teal-300/15 blur-[70px] sm:blur-[100px] rounded-full"
        />

        {/* Bottom Ambient Anchor Glow */}
        <motion.div
          animate={{
            opacity: [0.35, 0.65, 0.35],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[700px] h-[200px] sm:h-[300px] bg-gradient-to-t from-brand-300/20 via-accent-200/15 to-transparent blur-[80px] rounded-full"
        />
      </div>

      {/* 2. Cyber Isometric Tech Grid with Radial Fade Mask */}
      <div 
        className="absolute inset-0 opacity-[0.42] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2, 132, 199, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 132, 199, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 3. Glowing Laser Beams / Data Stream Sweeps */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal Laser Line 1 */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.85, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-[28%] left-0 w-72 sm:w-96 h-[1.5px] bg-gradient-to-r from-transparent via-brand-400 to-transparent blur-[0.5px]"
        />

        {/* Horizontal Laser Line 2 (Opposite direction) */}
        <motion.div
          animate={{
            x: ['200%', '-100%'],
            opacity: [0, 0.75, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3.5,
          }}
          className="absolute top-[68%] right-0 w-80 sm:w-[480px] h-[1.5px] bg-gradient-to-r from-transparent via-accent-400 to-transparent blur-[0.5px]"
        />

        {/* Vertical Pulse Beam */}
        <motion.div
          animate={{
            y: ['-100%', '200%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-0 left-[18%] sm:left-[22%] w-[1.5px] h-60 sm:h-80 bg-gradient-to-b from-transparent via-sky-400 to-transparent blur-[0.5px]"
        />

        {/* Vertical Pulse Beam 2 */}
        <motion.div
          animate={{
            y: ['-100%', '200%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
          className="absolute top-0 right-[18%] sm:right-[22%] w-[1.5px] h-60 sm:h-80 bg-gradient-to-b from-transparent via-teal-400 to-transparent blur-[0.5px]"
        />
      </div>

      {/* 4. Canvas Particle Network */}
      <HeroCanvas />

      {/* 5. Floating Glassmorphism Tech Nodes / Micro Badges (Peripheral Parallax) */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 pointer-events-none">
        
        {/* Left Side Floating Badges */}
        {/* Badge 1: 48h Launch / Fast */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hidden xl:flex absolute top-[22%] left-6 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-brand-200/70 shadow-lg shadow-brand-500/10"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-orange-500/30">
            <Zap className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">Fast Delivery</p>
            <p className="text-[9px] text-slate-500 font-medium">Rapid Web Launch</p>
          </div>
        </motion.div>

        {/* Badge 2: AI Automation */}
        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, -1.5, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
          className="hidden lg:flex absolute top-[52%] left-4 xl:left-10 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-accent-200/70 shadow-lg shadow-accent-500/10"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-accent-500 to-teal-400 flex items-center justify-center text-white shadow-sm shadow-accent-500/30">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">AI & Smart Workflows</p>
            <p className="text-[9px] text-accent-700 font-medium">Zero Manual Repetition</p>
          </div>
        </motion.div>

        {/* Badge 3: Web & App Engineering (Left Lower) */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="hidden 2xl:flex absolute top-[76%] left-16 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/75 backdrop-blur-md border border-brand-200/60 shadow-md shadow-brand-500/5"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-brand-600 to-sky-500 flex items-center justify-center text-white shadow-sm">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">Modern Tech Stack</p>
            <p className="text-[9px] text-slate-500 font-medium">React &bull; Node &bull; Cloud</p>
          </div>
        </motion.div>

        {/* Right Side Floating Badges */}
        {/* Badge 4: WhatsApp Official API */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
          className="hidden xl:flex absolute top-[20%] right-6 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-200/70 shadow-lg shadow-emerald-500/10"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-sm shadow-emerald-500/30">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">WhatsApp API</p>
            <p className="text-[9px] text-emerald-700 font-medium">Meta Verified & Automated</p>
          </div>
        </motion.div>

        {/* Badge 5: Custom CRM & ERP */}
        <motion.div
          animate={{
            y: [0, 11, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.1,
          }}
          className="hidden lg:flex absolute top-[50%] right-4 xl:right-10 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-200/70 shadow-lg shadow-indigo-500/10"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30">
            <Database className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">Custom CRM / ERP</p>
            <p className="text-[9px] text-slate-500 font-medium">Built for Your Operations</p>
          </div>
        </motion.div>

        {/* Badge 6: 99.9% Cloud Performance */}
        <motion.div
          animate={{
            y: [0, -9, 0],
            rotate: [0, -1, 0],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.8,
          }}
          className="hidden 2xl:flex absolute top-[75%] right-16 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/75 backdrop-blur-md border border-sky-200/60 shadow-md shadow-sky-500/5"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-sky-500 to-brand-600 flex items-center justify-center text-white shadow-sm">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">High Reliability</p>
            <p className="text-[9px] text-slate-500 font-medium">99.9% Uptime & Speed</p>
          </div>
        </motion.div>

        {/* Mobile / Small Screen Decorative Floating Micro-Dots / Geometric Nodes */}
        <div className="block lg:hidden">
          {/* Top Left Floating Dot */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-12 left-4 w-8 h-8 rounded-xl bg-brand-50/90 border border-brand-200/80 backdrop-blur-sm flex items-center justify-center shadow-xs"
          >
            <Cpu className="w-4 h-4 text-brand-500" />
          </motion.div>

          {/* Top Right Floating Dot */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-16 right-4 w-8 h-8 rounded-xl bg-accent-50/90 border border-accent-200/80 backdrop-blur-sm flex items-center justify-center shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-accent-500" />
          </motion.div>
        </div>

      </div>

      {/* 6. Subtle Cyber Flow Wave Accent along Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none" />

    </div>
  );
}
