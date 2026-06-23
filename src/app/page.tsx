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
  Zap,
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
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(255,255,255,0.08)' }}
      style={{
        padding: '36px 32px',
        borderRadius: 20,
        background: 'rgba(255, 255, 255, 0.015)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'all 0.3s ease',
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
        background: 'rgba(255, 255, 255, 0.015)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
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
        background: 'rgba(255, 255, 255, 0.015)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
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
  const bgImageRef = useRef<HTMLImageElement>(null);

  // Service Inquiry Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: 'Fractional HR Solutions',
    message: ''
  });

  // AI Chat Bot Widget States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: "Hello! Welcome to Strativis. I'm your AI HR assistant. How can I help you today?" }
  ]);

  // Newsletter Popup Modal State
  const [isNewsletterPopupOpen, setIsNewsletterPopupOpen] = useState(false);

  // Services Expandable State
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<number | null>(null);

  // Services Expandable Detail Modal State
  const [activeServiceDetail, setActiveServiceDetail] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('newsletter-popup-dismissed');
      if (!dismissed) {
        setIsNewsletterPopupOpen(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleOpenChat = () => setIsChatOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    const bgImage = bgImageRef.current;
    if (!bgImage) return;

    let scrollFraction = 0;
    let currentFraction = 0;
    let frameId = 0;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      scrollFraction = window.scrollY / scrollHeight;
    };

    const updateBgPosition = () => {
      // Smooth easing
      currentFraction += (scrollFraction - currentFraction) * 0.08;
      
      // Since image height is 150vh, we translate vertically from 0 to -50vh
      const translateY = currentFraction * -50;
      bgImage.style.transform = `translate3d(0, ${translateY}vh, 0)`;
      
      frameId = requestAnimationFrame(updateBgPosition);
    };

    // Calculate initial values
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    frameId = requestAnimationFrame(updateBgPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(frameId);
    };
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
      icon: Users,
      title: 'Training & Leadership Development',
      desc: 'We deliver training and L&OD programs that shift behavior. Our sessions give people the skills and confidence to unlock their next level.',
      detailedDesc: 'Our custom workshops focus on leadership alignment, feedback cultures, performance management, and effective communication. We empower first-time managers and senior executives alike with actionable tools that drive engagement.'
    },
    {
      icon: Award,
      title: 'Employer Brand',
      desc: 'Brand positioning, messaging, assets, and candidate experience design that attract and convert top talent.',
      detailedDesc: 'We define your unique Employee Value Proposition (EVP) and translate it into a compelling narrative. From career page optimization and recruiting collateral to candidate journey mapping, we make sure you stand out.'
    },
    {
      icon: Lightbulb,
      title: 'Coaching & The Birkman Method',
      desc: 'Birkman shows leaders who they are. Our coaching shows them how to use it.',
      detailedDesc: 'Utilizing the scientifically validated Birkman assessment, we provide deep insights into individual behaviors, underlying needs, and stress responses to improve self-awareness and team cohesion.'
    },
  ];

  /* ── team ──────────────────────────────────────────────────────── */
  const team = [
    {
      name: 'Amy Crook',
      role: 'Founder & Chief Talent Officer',
      bio: 'Chief Talent Officer with 15+ years of experience scaling global teams. Former senior leader at Glassdoor, known for designing people strategies that turn talent into a key competitive advantage.',
      gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    },
    {
      name: 'Erin Todus',
      role: 'Co-Founder & Managing Director of Talent Delivery',
      bio: 'Over 15 years of experience building and scaling high-performing hiring functions. Supervised 10,000+ placements, specializing in executive search and talent delivery infrastructure.',
      gradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
    },
  ];

  return (
    <div style={{ background: '#030712', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>

      {/* Fixed Background Image (linked to scroll) */}
      <img
        ref={bgImageRef}
        src="/skyscrapers.png"
        alt="Skyscrapers Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '150vh', // 50% taller to allow vertical panning
          objectFit: 'cover',
          zIndex: 1,
          opacity: 0.12, // Subtle blend with dark background
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* Page Content wrapper */}
      <div style={{ position: 'relative', zIndex: 10 }}>

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


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: 28,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ 
              color: '#f8fafc',
              fontSize: 'clamp(38px, 6.8vw, 84px)',
              fontWeight: 900,
            }}>
              STRATIVIS
            </span>
            <span style={{
              background: 'linear-gradient(135deg,#6366f1 0%,#8b5cf6 40%,#10b981 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(24px, 4.5vw, 48px)',
              fontWeight: 900,
            }}>
              Fractional HR &amp; Talent Delivery
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: '140px' }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
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
              background: 'linear-gradient(135deg,rgba(99,102,241,0.12),rgba(16,185,129,0.08))',
              borderRadius: 24, filter: 'blur(30px)',
            }} />
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.015)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 24, padding: '36px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}>
              {[
                { icon: Zap, title: 'Move Quickly', sub: 'We eliminate complexity and get things done.', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.2)' },
                { icon: Target, title: 'Real Impact', sub: 'Work that actually moves the needle for your business.', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.2)' },
                { icon: Lightbulb, title: 'Executive Thinking', sub: 'Senior strategy, not junior execution.', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)', border: 'rgba(99, 102, 241, 0.2)' },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex', gap: 20, alignItems: 'center',
                      padding: '20px 0',
                      borderBottom: i < 2 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                    }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <IconComponent size={20} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{item.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* WHY CHOOSE STRATIVIS                                        */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="why-choose"
        style={{ padding: '100px 24px', background: 'rgba(255, 255, 255, 0.01)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

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
      {/* ABOUT STRATIVIS                                              */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="about"
        style={{ padding: '120px 24px', maxWidth: 1160, margin: '0 auto' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', gap: 64, alignItems: 'center' }}>
          {/* Left Column - Image */}
          <motion.div variants={fadeUp} custom={1} style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -1,
              background: 'linear-gradient(135deg,rgba(16,185,129,0.2),rgba(99,102,241,0.15))',
              borderRadius: 24, filter: 'blur(20px)',
            }} />
            <div style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.015)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              padding: '12px',
            }}>
              <img
                src="/about-strativis.jpg"
                alt="About Strativis"
                style={{
                  width: '100%',
                  borderRadius: 16,
                  objectFit: 'cover',
                  display: 'block',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Details */}
          <div>
            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 24 }}>
              About <span style={{ background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>STRATIVIS</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <motion.p variants={fadeUp} custom={1} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8 }}>
                At STRATIVIS, we help growing businesses turn people challenges into real momentum. Whether clients need high-impact HR leadership, Executive hiring, or targeted project support, we show up, roll up our sleeves, and get things moving.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8 }}>
                We solve problems quickly, guide leaders with clarity and empathy, and build HR functions that actually work. We’re not your typical consultancy and definitely not a one-size-fits-all solution.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8 }}>
                STRATIVIS brings decades of hands-on experience in recruiting, HR consulting, and leadership coaching to your organization. That means we know how to deliver quick wins while setting teams up for long-term success.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8 }}>
                Founders and teams trust us because we’re direct, grounded, and understand what actually works. With STRATIVIS, HR stops feeling like red tape and starts acting like a growth engine, helping clients land the right people, strengthen their culture, and scale with confidence.
              </motion.p>
            </div>
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

          {/* Credentials Marquee Ticker */}
          <div className="marquee-container" style={{ marginTop: '50px' }}>
            <div className="marquee-content">
              {/* Group 1 */}
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                SHRM Certified
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1' }}></span>
                MIT Sloan School of Management
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4' }}></span>
                LinkedIn Certified Professional Recruiter
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></span>
                Birkman Certified
              </span>
              {/* Group 2 (Duplicate for seamless loop) */}
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
                SHRM Certified
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1' }}></span>
                MIT Sloan School of Management
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4' }}></span>
                LinkedIn Certified Professional Recruiter
              </span>
              <span className="marquee-item">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></span>
                Birkman Certified
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* WHAT WE DO (Services)                                        */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="what-we-do"
        style={{ padding: '100px 24px', background: 'rgba(255, 255, 255, 0.01)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
              From fractional leadership to full-cycle recruiting, we deliver across the entire people function.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
            {services.map((s, i) => {
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i * 0.5}
                  whileHover={{ y: -6, borderColor: 'rgba(16,185,129,0.3)', boxShadow: '0 24px 60px rgba(255,255,255,0.08)' }}
                  style={{
                    padding: '28px 28px', borderRadius: 16,
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    transition: 'all 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
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
                    <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                  </div>

                  <button
                    onClick={() => setActiveServiceDetail(s)}
                    style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '8px',
                      color: '#10b981',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '8px 16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      alignSelf: 'flex-start',
                      marginTop: '12px',
                    }}
                  >
                    Learn More
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* PROOF POINTS                                                 */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section id="proof-points" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

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

          {/* Testimonials */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '30px', maxWidth: '1160px', margin: '0 auto' }}>
            {[
              {
                text: "For organizations looking to scale smartly, navigate change, or simply elevate their people strategy, Amy brings unmatched expertise. I fully recommend her as a consultant through Strativis—where her blend of strategic HR leadership and practical problem-solving will make a positive impact on any business.",
                name: "Val",
                role: "VP of Sales",
                image: "/val.jpg"
              },
              {
                text: "Two qualities especially stood out: Amy's people-first approach to talent management, and how well she was able to work with folks at all different altitudes (senior execs and low-level ICs), both internally and externally. I always felt extremely well-supported by Amy and her team, and I believe any organization would be lucky to benefit from her talent management and HR leadership skills.",
                name: "Mike",
                role: "VP of Engineering",
                image: "/mike.jpg"
              }
            ].map((t, idx) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={idx + 3}
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <Quote size={28} color="rgba(16,185,129,0.3)" />
                <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.75', fontStyle: 'italic', textAlign: 'left' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgba(16,185,129,0.4)',
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* OUR TEAM                                                     */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="our-team"
        style={{ padding: '100px 24px', background: 'rgba(255, 255, 255, 0.01)' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

            <motion.h2 variants={fadeUp} custom={0} style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', marginBottom: 16 }}>
              Meet Our HR & Talent Delivery Experts
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: 16, color: '#94a3b8', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              Leaders in Fractional HR & Talent Delivery
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
      {/* CONTACT                                                      */}
      {/* ════════════════════════════════════════════════════════════ */}
      <Section
        id="contact"
        style={{ padding: '100px 24px', background: 'rgba(255, 255, 255, 0.01)' }}
      >
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

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
                  background: 'rgba(255, 255, 255, 0.015)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  textDecoration: 'none',
                  display: 'flex', flexDirection: 'column', gap: 12,
                  transition: 'all 0.3s',
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
            background: 'linear-gradient(135deg,rgba(99,102,241,0.06),rgba(16,185,129,0.05))',
            border: '1px solid rgba(99,102,241,0.1)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
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

      {/* Service Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(3, 7, 18, 0.8)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '600px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.5)',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'background 0.2s',
                }}
              >
                ✕
              </button>

              <h2 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#22d3ee', // Cyan tone
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}>Service Inquiry</h2>
              
              <p style={{
                fontSize: '14px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Fill in the form below to let us know which service you&apos;re interested in and how we can help - we&apos;ll get back to you as soon as possible.
              </p>

              {inquirySubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px', color: '#22d3ee' }}>✓</div>
                  <h3 style={{ color: '#f8fafc', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Request Sent!</h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                  setTimeout(() => {
                    setIsModalOpen(false);
                    setInquirySubmitted(false);
                    setInquiryForm({ firstName: '', lastName: '', phone: '', service: 'Fractional HR Solutions', message: '' });
                  }, 2000);
                }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>First name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.firstName}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, firstName: e.target.value })}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          color: '#f8fafc',
                          outline: 'none',
                          fontSize: '14px',
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Last name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.lastName}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, lastName: e.target.value })}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          color: '#f8fafc',
                          outline: 'none',
                          fontSize: '14px',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Phone number *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        color: '#f8fafc',
                        outline: 'none',
                        fontSize: '14px',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Which service are you interested in?</label>
                    <select
                      value={inquiryForm.service}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                      style={{
                        background: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        color: '#f8fafc',
                        outline: 'none',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Fractional HR Solutions">Fractional HR Solutions</option>
                      <option value="Talent Acquisition">Talent Acquisition</option>
                      <option value="Fractional People Team Leadership">Fractional People Team Leadership</option>
                      <option value="HR Strategy & Transformation">HR Strategy & Transformation</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Add a message or tell us more about what you need</label>
                    <textarea
                      rows={4}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        color: '#f8fafc',
                        outline: 'none',
                        fontSize: '14px',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#22d3ee',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '15px',
                      padding: '14px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      marginTop: '8px',
                    }}
                  >
                    Send Request
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Auto-popup Modal */}
      <AnimatePresence>
        {isNewsletterPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(3, 7, 18, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => {
              setIsNewsletterPopupOpen(false);
              localStorage.setItem('newsletter-popup-dismissed', 'true');
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '540px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '40px 32px',
                position: 'relative',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
                textAlign: 'center',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsNewsletterPopupOpen(false);
                  localStorage.setItem('newsletter-popup-dismissed', 'true');
                }}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background 0.2s',
                }}
              >
                ✕
              </button>

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <Mail size={24} color="#10b981" />
              </div>

              <h2 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#f8fafc',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}>People &amp; HR Insights, Monthly.</h2>
              
              <p style={{
                fontSize: '14px',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '28px',
              }}>
                Join our list to receive curated insights on HR strategy, talent trends, and the future of work — straight from practitioners, not theorists.
              </p>

              {joined ? (
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px', color: '#10b981' }}>✓</div>
                  <p style={{ color: '#10b981', fontSize: '15px', fontWeight: 600 }}>You&apos;re in! Welcome to the community.</p>
                </div>
              ) : (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes('@')) {
                    setJoined(true);
                    setTimeout(() => {
                      setIsNewsletterPopupOpen(false);
                      setJoined(false);
                      setEmail('');
                      localStorage.setItem('newsletter-popup-dismissed', 'true');
                    }, 2500);
                  }
                }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#f8fafc',
                      outline: 'none',
                      fontSize: '14px',
                      textAlign: 'center',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '15px',
                      padding: '14px',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Detail Modal */}
      <AnimatePresence>
        {activeServiceDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(3, 7, 18, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setActiveServiceDetail(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '40px 32px',
                position: 'relative',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
                maxHeight: '85vh',
                overflowY: 'auto',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveServiceDetail(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'background 0.2s',
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {activeServiceDetail.title === 'Training & Leadership Development' ? (
                    <Users size={28} color="#6366f1" />
                  ) : activeServiceDetail.title === 'Employer Brand' ? (
                    <Award size={28} color="#6366f1" />
                  ) : (
                    <Lightbulb size={28} color="#6366f1" />
                  )}
                </div>
                <div>
                  <h2 style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#f8fafc',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    textAlign: 'left'
                  }}>{activeServiceDetail.title}</h2>
                </div>
              </div>

              {activeServiceDetail.title === 'Training & Leadership Development' ? (
                /* Training & Leadership Development custom rich renderer */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#cbd5e1', textAlign: 'left' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>How it Works</h3>
                    <p style={{ fontStyle: 'italic', color: '#10b981', fontWeight: 600, marginBottom: '12px' }}>Practical support. Real-time guidance. Leaders who can deliver.</p>
                    <p style={{ lineHeight: 1.6, marginBottom: '12px' }}>At STRATIVIS, we don’t believe leadership development should live in a deck or get lost after a workshop. We provide hands-on training and leadership support designed to meet your leaders exactly where they are, especially when the pressure is on and decisions can’t wait.</p>
                    <p style={{ lineHeight: 1.6 }}>Our approach blends practical training, real-world application, and in-the-moment guidance, helping HR and People leaders build confidence, capability, and credibility while driving results for the business.</p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>What We Support</h3>
                    <p style={{ lineHeight: 1.6, marginBottom: '16px' }}>We partner with organizations at every stage to deliver targeted training and development across the employee and leadership lifecycle. Our work is tailored, flexible, and grounded in the realities your leaders face every day.</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#22d3ee', marginBottom: '10px' }}>Leadership &amp; Manager Development</h4>
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                          <li>New manager and first-time leader training</li>
                          <li>Executive and senior leader effectiveness</li>
                          <li>Coaching through difficult conversations and decisions</li>
                          <li>Stakeholder management and executive presence</li>
                          <li>Leading through change, growth, or ambiguity</li>
                        </ul>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#10b981', marginBottom: '10px' }}>HR &amp; People Leader Enablement</h4>
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                          <li>Performance management and PIP execution</li>
                          <li>Employee relations and risk-aware decision making</li>
                          <li>Policy interpretation and practical application</li>
                          <li>Coaching HR leaders to operate as strategic advisors</li>
                          <li>Building credibility with executives and managers</li>
                        </ul>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#8b5cf6', marginBottom: '10px' }}>Talent &amp; Hiring Excellence</h4>
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                          <li>Behavioral interviewing and selection training</li>
                          <li>Hiring manager capability building</li>
                          <li>Candidate experience and process consistency</li>
                          <li>Scaling hiring practices for growth-stage teams</li>
                        </ul>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ec4899', marginBottom: '10px' }}>Organizational Effectiveness</h4>
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                          <li>Clarifying roles, accountability, and expectations</li>
                          <li>Supporting leaders through restructures or growth</li>
                          <li>Embedding consistent leadership behaviors</li>
                          <li>Translating strategy into execution</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>More HR Training Topics We Deliver</h3>
                    <p style={{ lineHeight: 1.6, marginBottom: '12px' }}>In addition to leadership development, STRATIVIS delivers hands-on training sessions across a wide range of HR and People topics. These sessions are designed to be practical, immediately applicable, and tailored to your organization’s needs.</p>
                    <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', marginBottom: '12px' }}>
                      <li>Behavioral interviewing and structured hiring decisions</li>
                      <li>Performance management and PIP execution</li>
                      <li>Employee relations fundamentals and risk-aware decision making</li>
                      <li>Manager capability and people leadership essentials</li>
                      <li>Building consistent, fair, and scalable people processes</li>
                      <li>Candidate experience and hiring process optimization</li>
                      <li>HR credibility and influencing senior stakeholders</li>
                    </ul>
                    <p style={{ fontSize: '13px', color: '#94a3b8' }}>Each session is grounded in real scenarios your team is facing, with space for discussion, application, and live guidance so participants leave with clarity, confidence, and tools they can use immediately.</p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Hands-On Support. When You Need It Most</h3>
                    <p style={{ lineHeight: 1.6, marginBottom: '12px' }}>What sets STRATIVIS apart is how we show up. We don’t just train and disappear. We provide:</p>
                    <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', marginBottom: '12px' }}>
                      <li>Real-time guidance during complex or high-stakes moments</li>
                      <li>Practical coaching leaders can apply immediately</li>
                      <li>Ongoing support between sessions—not just scheduled check-ins</li>
                      <li>Clear, actionable direction when leaders need a sounding board</li>
                    </ul>
                    <p style={{ lineHeight: 1.6 }}>Whether your HR leader is navigating a sensitive employee issue, preparing for an executive conversation, or stepping into a bigger role, we act as an extension of your team, bringing experience, perspective, and calm when it matters most.</p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>How We Work</h3>
                    <p style={{ lineHeight: 1.6, marginBottom: '12px' }}>Our engagements are flexible and built around your needs:</p>
                    <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', marginBottom: '12px' }}>
                      <li>Targeted workshops or multi-session training programs</li>
                      <li>Ongoing leadership coaching and advisory support</li>
                      <li>Fractional leadership development for HR teams</li>
                      <li>Custom programs aligned to your stage, culture, and goals</li>
                    </ul>
                    <p style={{ fontStyle: 'italic', color: '#22d3ee', fontWeight: 600 }}>No off-the-shelf frameworks. No generic leadership theory. Just practical support that works in the real world.</p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '8px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>The Outcome</h3>
                    <p style={{ marginBottom: '12px', lineHeight: 1.6 }}>Leaders who are: <strong>More confident and decisive, better equipped to handle complexity, stronger partners to the business, consistent, credible, and effective.</strong> And HR teams who are no longer carrying everything alone.</p>
                    <p style={{ color: '#10b981', fontWeight: 600 }}>If your leaders need support now, not six months from now, STRATIVIS is ready. We provide the guidance, training, and partnership to help your people lead with clarity, confidence, and impact.</p>
                  </div>
                </div>
              ) : (
                /* Standard Service detail view */
                <div style={{ textAlign: 'left', color: '#cbd5e1' }}>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>{activeServiceDetail.desc}</p>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', color: '#94a3b8' }}>
                    {activeServiceDetail.detailedDesc}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Bot Widget */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#10b981,#06b6d4)',
            border: 'none',
            boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          {isChatOpen ? '✕' : '💬'}
        </motion.button>

        {/* Chat window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              style={{
                position: 'absolute',
                bottom: '72px',
                right: 0,
                width: '320px',
                height: '400px',
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                padding: '14px 16px',
                background: 'linear-gradient(135deg,rgba(16,185,129,0.15),rgba(6,182,212,0.15))',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Strativis AI Support</span>
              </div>

              {/* Messages */}
              <div style={{
                flex: 1,
                padding: '16px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      background: msg.sender === 'user' ? '#10b981' : 'rgba(255,255,255,0.05)',
                      color: msg.sender === 'user' ? '#0f172a' : '#cbd5e1',
                      padding: '8px 12px',
                      borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                      fontSize: '13px',
                      lineHeight: 1.4,
                      maxWidth: '85%',
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!chatInput.trim()) return;
                  const newMsg = { sender: 'user', text: chatInput };
                  setChatMessages(prev => [...prev, newMsg]);
                  setChatInput('');
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, {
                      sender: 'bot',
                      text: `Thanks for reaching out! A member of the Strativis team will review your inquiry shortly. If you need immediate assistance, please call us at 331-335-8691.`
                    }]);
                  }, 1000);
                }}
                style={{
                  padding: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    color: '#f8fafc',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#10b981',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '12px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                  }}
                >
                  Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      </div>
    </div>
  );
}
