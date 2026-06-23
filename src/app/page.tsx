'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
  Users,
  Target,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Mail,
  Phone,
  Quote,
  Briefcase,
  Award,
  Lightbulb,
  Shield,
} from 'lucide-react';

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

/* ─── Shared animation helpers ────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function Section({ children, id, style }: { children: React.ReactNode; id?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
    >
      {children}
    </motion.section>
  );
}

/* ─── Pill badge ──────────────────────────────────────────────────────── */
function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 16px', borderRadius: '999px',
      background: 'rgba(16,185,129,0.12)',
      border: '1px solid rgba(16,185,129,0.25)',
      fontSize: 12, fontWeight: 600, letterSpacing: '0.06em',
      color: '#10b981', textTransform: 'uppercase',
      marginBottom: 20,
    }}>
      {children}
    </span>
  );
}

/* ─── Pillar Card ─────────────────────────────────────────────────────── */
function PillarCard({
  icon: Icon, title, body, index,
}: { icon: React.ElementType; title: string; body: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(16,185,129,0.15)' }}
      style={{
        padding: '36px 32px',
        borderRadius: 20,
        background: 'rgba(15,23,42,0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(148,163,184,0.1)',
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'border-color 0.3s ease',
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: 'linear-gradient(135deg,rgba(16,185,129,0.2),rgba(6,182,212,0.1))',
        border: '1px solid rgba(16,185,129,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={22} color="#10b981" />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.75 }}>{body}</p>
    </motion.div>
  );
}

/* ─── Proof stat card ─────────────────────────────────────────────────── */
function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ scale: 1.04 }}
      style={{
        padding: '32px 24px', borderRadius: 16, textAlign: 'center',
        background: 'rgba(15,23,42,0.6)',
        border: '1px solid rgba(148,163,184,0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{
        fontSize: 42, fontWeight: 800, letterSpacing: '-0.03em',
        background: 'linear-gradient(135deg,#10b981,#06b6d4)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        marginBottom: 8,
      }}>{value}</div>
      <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</div>
    </motion.div>
  );
}

/* ─── Team Card ───────────────────────────────────────────────────────── */
function TeamCard({ name, role, bio, gradient, index }: {
  name: string; role: string; bio: string; gradient: string; index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: 20, overflow: 'hidden',
        background: 'rgba(15,23,42,0.8)',
        border: '1px solid rgba(148,163,184,0.1)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div style={{
        height: 8,
        background: gradient,
      }} />
      <div style={{ padding: '32px 28px' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, fontWeight: 800, color: '#fff',
          marginBottom: 16,
        }}>
          {name.charAt(0)}
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>{name}</h3>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#10b981', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>{role}</p>
        <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.75 }}>{bio}</p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════ */
/*  PAGE                                                                   */
/* ═══════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) { setJoined(true); setEmail(''); }
  };

  /* ── pillar data ───────────────────────────────────────────────── */
  const pillars = [
    {
      icon: Target,
      title: 'Tailored HR Solutions',
      body: 'No matter the size of the challenge, we provide tailored HR solutions that move fast, solve real problems, and respect your budget.',
    },
    {
      icon: Users,
      title: 'Effortless Talent Acquisition',
      body: 'Our Talent Delivery team will simplify the talent acquisition process, making it easy for you to find, secure and onboard top talent for your organization.',
    },
    {
      icon: Briefcase,
      title: 'Fractional People Team Leadership',
      body: 'Get executive-level people team leadership without the full-time cost. A Fractional executive brings clarity, structure, and momentum exactly when you need it.',
    },
  ];

  /* ── proof stats ───────────────────────────────────────────────── */
  const stats = [
    { value: '200+', label: 'Placements Made' },
    { value: '98%', label: 'Client Retention' },
    { value: '15+', label: 'Industries Served' },
    { value: '2×', label: 'Faster Time-to-Hire' },
  ];

  /* ── services ──────────────────────────────────────────────────── */
  const services = [
    {
      icon: TrendingUp,
      title: 'HR Strategy & Transformation',
      desc: 'Build people systems that scale with your company. We audit, redesign, and implement HR infrastructure that actually works.',
    },
    {
      icon: Users,
      title: 'Executive & Fractional Recruiting',
      desc: 'Precision-engineered searches for leadership and senior-individual-contributor roles in competitive markets.',
    },
    {
      icon: Shield,
      title: 'Compliance & Policy Architecture',
      desc: 'Establish compliant, future-proof policies. From handbooks to PIP frameworks — we build the infrastructure that protects you.',
    },
    {
      icon: Award,
      title: 'Compensation Benchmarking',
      desc: 'Stay competitive and equitable. We design compensation structures that attract and retain top-tier talent.',
    },
    {
      icon: Lightbulb,
      title: 'Culture & Engagement Design',
      desc: 'High-performance cultures are intentional. We map the moments that matter and architect experiences that drive retention.',
    },
    {
      icon: Star,
      title: 'Onboarding Systems',
      desc: 'Turn new hires into high performers faster. We design onboarding programs that build belonging and productivity from day one.',
    },
  ];

  /* ── team ──────────────────────────────────────────────────────── */
  const team = [
    {
      name: 'Founder A',
      role: 'Co-Founder & Chief HR Strategist',
      bio: 'A seasoned HR executive with 15+ years driving people strategy for high-growth SaaS and PE-backed companies. Known for building HR from zero to scale.',
      gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    },
    {
      name: 'Founder B',
      role: 'Co-Founder & Head of Talent Delivery',
      bio: 'Former VP of Talent Acquisition with expertise in executive search, technical recruiting, and building world-class talent engines in competitive markets.',
      gradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
    },
  ];

  return (
    <div style={{ background: '#030712', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* HERO                                                         */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: 80,
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        >
          <source src="/A_premium_slow_moving_abstrac.mp4" type="video/mp4" />
        </video>
        {/* Animated gradient orbs */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16,185,129,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Moving grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.3) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.15}px)`,
          pointerEvents: 'none',
        }} />

        {/* Floating orb 1 */}
        <motion.div
          animate={{ y: [0, -24, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '20%', left: '10%',
            width: 320, height: 320, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }}
        />
        {/* Floating orb 2 */}
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '15%', right: '8%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)',
            filter: 'blur(50px)', pointerEvents: 'none',
          }}
        />

        {/* Hero content */}
        <div style={{
          position: 'relative', zIndex: 10,
          maxWidth: 960, margin: '0 auto', padding: '0 24px',
          textAlign: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <PillBadge>
              <Star size={10} /> Boutique · Founder-Led · Results-Driven
            </PillBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(36px,6.5vw,80px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              marginBottom: 28,
            }}
          >
            <span style={{ color: '#f8fafc' }}>STRATIVIS:</span>{' '}
            <span style={{
              background: 'linear-gradient(135deg,#6366f1 0%,#8b5cf6 40%,#10b981 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Fractional HR<br />&amp; Talent Delivery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(16px,2vw,19px)',
              color: '#94a3b8',
              lineHeight: 1.75,
              maxWidth: 700, margin: '0 auto 44px',
            }}
          >
            STRATIVIS is a boutique, founder-led HR consultancy built by two experienced executives
            who&apos;ve led people strategy in high-growth, high-expectation environments. We move quickly,
            eliminate complexity, and deliver work that actually makes an impact.{' '}
            <strong style={{ color: '#f8fafc' }}>For us, excellence isn&apos;t optional.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '15px 36px', borderRadius: 12,
                background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                color: '#fff', fontSize: 15, fontWeight: 700,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 0 24px rgba(16,185,129,0.25)',
              }}
            >
              Work With Us <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#what-we-do"
              whileHover={{ scale: 1.04, borderColor: 'rgba(148,163,184,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '15px 36px', borderRadius: 12,
                background: 'rgba(148,163,184,0.07)',
                border: '1px solid rgba(148,163,184,0.2)',
                color: '#f8fafc', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
            >
              Our Services
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}
          >
            <ChevronDown size={22} color="rgba(148,163,184,0.4)" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* WHO WE ARE                                                   */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="who-we-are"
        style={{ padding: '120px 24px', maxWidth: 1160, margin: '0 auto' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', gap: 64, alignItems: 'center' }}>
          {/* Left text */}
          <div>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>Who We Are</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 20 }}>
              Built by Executives,<br />
              <span style={{ background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for High-Growth Teams
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8, marginBottom: 16 }}>
              We are STRATIVIS — a boutique, founder-led HR consultancy founded by two seasoned HR and talent leaders who have built and scaled people operations in some of the most competitive environments in business.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8, marginBottom: 32 }}>
              We don&apos;t do generic. Every engagement is custom-built around your business reality — your stage, your culture, and your constraints. We bring structure without bureaucracy, and speed without shortcuts.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Boutique & founder-led', 'Senior-level practitioners only', 'No bloated retainers or unnecessary overhead', 'Excellence is our baseline, not a goal'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={16} color="#10b981" />
                  <span style={{ fontSize: 14, color: '#cbd5e1' }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — decorative card stack */}
          <motion.div variants={fadeUp} custom={1} style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -1,
              background: 'linear-gradient(135deg,rgba(99,102,241,0.2),rgba(16,185,129,0.1))',
              borderRadius: 24, filter: 'blur(20px)',
            }} />
            <div style={{
              position: 'relative',
              background: 'rgba(15,23,42,0.9)',
              border: '1px solid rgba(148,163,184,0.12)',
              borderRadius: 24, padding: 40,
              backdropFilter: 'blur(20px)',
            }}>
              {[
                { icon: '🚀', title: 'Move Quickly', sub: 'We eliminate complexity and get things done.' },
                { icon: '🎯', title: 'Real Impact', sub: 'Work that actually moves the needle for your business.' },
                { icon: '💡', title: 'Executive Thinking', sub: 'Senior strategy, not junior execution.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    padding: '16px 0',
                    borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.08)' : 'none',
                  }}
                >
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#64748b' }}>{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE STRATIVIS                                        */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="why-choose"
        style={{ padding: '100px 24px', background: 'rgba(15,23,42,0.4)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>Why Strativis?</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Why Choose Strativis?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              Three core pillars that define how we deliver results for our clients.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {pillars.map((p, i) => (
              <PillarCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* ARISTOTLE QUOTE                                              */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          {/* Glow line */}
          <motion.div
            variants={fadeIn}
            custom={0}
            style={{
              width: 60, height: 2, margin: '0 auto 40px',
              background: 'linear-gradient(90deg,transparent,#10b981,transparent)',
            }}
          />

          <motion.div variants={fadeUp} custom={0} style={{ position: 'relative' }}>
            <Quote
              size={64}
              style={{
                position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)',
                opacity: 0.06, color: '#10b981',
              }}
            />
            <blockquote style={{
              fontSize: 'clamp(24px,4vw,42px)',
              fontWeight: 700, lineHeight: 1.3,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg,#f8fafc 0%,#94a3b8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontStyle: 'italic', marginBottom: 24,
            }}>
              &ldquo;Excellence is not an act, but a habit.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div variants={fadeIn} custom={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 1, background: 'rgba(148,163,184,0.3)' }} />
            <span style={{ fontSize: 13, color: '#64748b', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Aristotle</span>
            <div style={{ width: 32, height: 1, background: 'rgba(148,163,184,0.3)' }} />
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* WHAT WE DO (Services)                                        */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="what-we-do"
        style={{ padding: '100px 24px', background: 'rgba(15,23,42,0.35)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>What We Do</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
              From fractional leadership to full-cycle recruiting, we deliver across the entire people function.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i * 0.5}
                whileHover={{ y: -6, borderColor: 'rgba(16,185,129,0.3)' }}
                style={{
                  padding: '28px 28px', borderRadius: 16,
                  background: 'rgba(15,23,42,0.7)',
                  border: '1px solid rgba(148,163,184,0.08)',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <s.icon size={20} color="#6366f1" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.75 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* PROOF POINTS                                                 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section id="proof-points" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>Proof Points</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Results You Can Measure
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
              Our track record speaks for itself — in placements, partnerships, and performance.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20, marginBottom: 60 }}>
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            variants={fadeUp}
            custom={4}
            style={{
              padding: '48px 40px', borderRadius: 20,
              background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(16,185,129,0.06))',
              border: '1px solid rgba(99,102,241,0.15)',
              backdropFilter: 'blur(16px)',
              maxWidth: 760, margin: '0 auto', textAlign: 'center',
            }}
          >
            <Quote size={32} color="rgba(16,185,129,0.3)" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: 18, color: '#cbd5e1', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
              &ldquo;Working with Strativis transformed our people ops. Within 90 days, we had a compensation framework, an onboarding program, and had placed two senior leaders. They&apos;re the real deal.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, color: '#fff',
              }}>C</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#f8fafc' }}>Client CEO</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>Series B SaaS Company</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OUR TEAM                                                     */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="our-team"
        style={{ padding: '100px 24px', background: 'rgba(15,23,42,0.4)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>Our Team</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Meet the Founders
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              Two experienced executives with decades of combined expertise in HR strategy and talent acquisition.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 28 }}>
            {team.map((t, i) => (
              <TeamCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* NEWSLETTER                                                   */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeIn} custom={0}>
            <PillBadge>
              <Mail size={10} /> Stay in the loop
            </PillBadge>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 12 }}>
            People & HR Insights, Monthly.
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.75, marginBottom: 36 }}>
            Join our list to receive curated insights on HR strategy, talent trends, and the future of work — straight from practitioners, not theorists.
          </motion.p>

          <motion.form
            variants={fadeUp}
            custom={2}
            onSubmit={handleJoin}
            style={{
              display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
            }}
          >
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              required
              style={{
                flex: '1 1 260px', padding: '13px 18px', borderRadius: 10,
                background: 'rgba(15,23,42,0.8)',
                border: '1px solid rgba(148,163,184,0.15)',
                color: '#f8fafc', fontSize: 14, outline: 'none',
                fontFamily: 'inherit',
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(16,185,129,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 28px', borderRadius: 10,
                background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                color: '#fff', fontSize: 14, fontWeight: 700,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Join
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {joined && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ marginTop: 16, fontSize: 14, color: '#10b981', fontWeight: 600 }}
              >
                ✓ You&apos;re in! Welcome to the community.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* CONTACT                                                      */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="contact"
        style={{ padding: '100px 24px', background: 'rgba(15,23,42,0.4)' }}
      >
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <motion.div variants={fadeIn} custom={0}>
              <PillBadge>Contact</PillBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Let&apos;s Start a Conversation
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
              Whether you need a fractional HR leader, a full talent search, or a strategic sounding board — we&apos;re here.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '331-335-8691',
                href: 'tel:3313358691',
                color: '#6366f1',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'Info@strativis.io',
                href: 'mailto:Info@strativis.io',
                color: '#10b981',
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: '@strativis_hr_consulting',
                href: 'https://instagram.com/strativis_hr_consulting',
                color: '#ec4899',
              },
            ].map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.label === 'Instagram' ? '_blank' : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${ch.color}22` }}
                style={{
                  padding: '32px 28px', borderRadius: 16,
                  background: 'rgba(15,23,42,0.7)',
                  border: '1px solid rgba(148,163,184,0.08)',
                  backdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  display: 'flex', flexDirection: 'column', gap: 12,
                  transition: 'border-color 0.3s',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${ch.color}18`,
                  border: `1px solid ${ch.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ch.icon size={20} color={ch.color} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{ch.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f8fafc' }}>{ch.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* BOTTOM CTA BANNER                                           */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section style={{ padding: '80px 24px' }}>
        <motion.div
          variants={fadeUp}
          custom={0}
          style={{
            maxWidth: 860, margin: '0 auto', padding: '64px 48px',
            borderRadius: 24, textAlign: 'center',
            background: 'linear-gradient(135deg,rgba(99,102,241,0.12),rgba(16,185,129,0.1))',
            border: '1px solid rgba(99,102,241,0.2)',
            backdropFilter: 'blur(20px)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%,rgba(99,102,241,0.15),transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: 16 }}>
              Ready to Elevate Your People Strategy?
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.75, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              Let&apos;s talk about your people challenges and how Strativis can help you move faster, build smarter, and deliver results.
            </p>
            <motion.a
              href="mailto:Info@strativis.io"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '16px 40px', borderRadius: 12,
                background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                color: '#fff', fontSize: 15, fontWeight: 700,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </Section>

    </div>
  );
}
