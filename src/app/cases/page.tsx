'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const cases = [
  {
    id: 'nexacore',
    badge: 'Digital Transformation',
    badgeColor: '#8b5cf6',
    company: 'NexaCore Technologies',
    industry: 'Enterprise Software · $4.2B Revenue',
    headline: 'From Legacy Monolith to Cloud-Native Platform in 18 Months',
    challenge: 'NexaCore\'s decade-old monolithic architecture was causing 34% system downtime, blocking product velocity, and losing enterprise clients to cloud-native competitors. Their engineering team was spending 70% of capacity on maintenance rather than innovation.',
    solution: 'We designed and orchestrated a phased cloud-native transformation — migrating 147 microservices to AWS, implementing CI/CD pipelines, building a real-time data platform, and rearchitecting the customer-facing API layer with zero data loss.',
    result: 'NexaCore launched their cloud platform on schedule, achieving 99.98% uptime, 4× release velocity, and landing 3 Fortune 100 contracts worth $180M within 6 months of launch.',
    kpis: [
      { label: 'Revenue Growth', value: '340%', icon: TrendingUp },
      { label: 'System Uptime', value: '99.98%', icon: Zap },
      { label: 'Release Velocity', value: '4×', icon: ArrowRight },
      { label: 'New Contracts', value: '$180M', icon: TrendingUp },
    ],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    id: 'meridian',
    badge: 'Operational Excellence',
    badgeColor: '#06b6d4',
    company: 'Meridian Financial Group',
    industry: 'Investment Banking · $28B AUM',
    headline: 'Rebuilding Middle-Office Operations Across 12 Geographies',
    challenge: 'Meridian\'s post-merger integration of 3 regional banks created fragmented operations with 23 duplicate systems, $340M in redundant costs, and a 58-day average trade settlement cycle — 4× above industry standard.',
    solution: 'We deployed a 60-person engagement team across 12 geographies to rationalize systems, redesign processes using lean methodology, and implement a unified operations platform connecting all regional entities in real-time.',
    result: 'Meridian achieved $240M in annual cost savings, reduced settlement cycles to 4 days (beating industry standard), and was recognized by Bloomberg as the most operationally efficient regional bank of 2023.',
    kpis: [
      { label: 'Cost Savings', value: '$240M', icon: TrendingUp },
      { label: 'Settlement Time', value: '-93%', icon: Zap },
      { label: 'Systems Rationalized', value: '23→4', icon: ArrowRight },
      { label: 'NPS Score', value: '+67pts', icon: TrendingUp },
    ],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    id: 'apex',
    badge: 'Strategy Consulting',
    badgeColor: '#6366f1',
    company: 'Apex Global Industries',
    industry: 'Manufacturing · 45,000 Employees',
    headline: 'Orchestrating a $2.1B Portfolio Transformation',
    challenge: 'Apex was operating 14 business units with an average EBITDA margin of 8.2% — well below their industrial sector peers. Declining commodity margins were accelerating, and activist investors were demanding a fundamental strategic reset.',
    solution: 'We conducted a 90-day strategic portfolio review, identified 4 core businesses to scale and 6 non-core units to divest. We led the divestiture process, designed the reinvestment strategy, and built the operating model for the refocused portfolio.',
    result: 'Apex completed 6 divestitures for $1.4B, deployed proceeds into 2 transformative acquisitions, and grew EBITDA margins from 8.2% to 21.7% within 24 months — creating $3.8B in shareholder value.',
    kpis: [
      { label: 'EBITDA Margin', value: '+165%', icon: TrendingUp },
      { label: 'Value Created', value: '$3.8B', icon: Zap },
      { label: 'Divestitures', value: '6 Deals', icon: ArrowRight },
      { label: 'Shareholder Return', value: '+284%', icon: TrendingUp },
    ],
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.15)',
  },
];

export default function CasesPage() {
  return (
    <div style={{ background: '#030712', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px',
              borderRadius: '100px', background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.2)', marginBottom: '24px',
            }}>
              <TrendingUp size={12} color="#10b981" />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#34d399', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Proven Results</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f8fafc', lineHeight: 1.05, marginBottom: '20px' }}
          >
            Case Studies That{' '}
            <span style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Speak for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.7 }}
          >
            Real transformations. Measurable outcomes. Documented results.
          </motion.p>
        </div>
      </section>

      {/* Cases */}
      <section style={{ padding: '20px 24px 120px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {cases.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.1}>
              <div style={{
                borderRadius: '24px',
                background: 'rgba(15,23,42,0.8)',
                border: `1px solid rgba(148,163,184,0.08)`,
                overflow: 'hidden',
              }}>
                {/* Header */}
                <div style={{
                  padding: '40px 48px 32px',
                  borderBottom: '1px solid rgba(148,163,184,0.06)',
                  background: `linear-gradient(135deg, ${c.glow}, transparent)`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: '100px',
                      background: `${c.badgeColor}18`, border: `1px solid ${c.badgeColor}30`,
                      fontSize: '11px', fontWeight: 700, color: c.badgeColor,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{c.badge}</span>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>{c.industry}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.2, marginBottom: '8px', letterSpacing: '-0.02em' }}>{c.company}</h2>
                  <p style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: '#94a3b8', fontWeight: 500 }}>{c.headline}</p>
                </div>

                {/* KPIs */}
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                  borderBottom: '1px solid rgba(148,163,184,0.06)',
                }}>
                  {c.kpis.map(({ label, value }) => (
                    <div key={label} style={{
                      padding: '24px', textAlign: 'center',
                      borderRight: '1px solid rgba(148,163,184,0.06)',
                    }}>
                      <div style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, color: c.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', fontWeight: 500 }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* CSR */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
                  {[
                    { label: 'Challenge', text: c.challenge, color: '#ef4444' },
                    { label: 'Solution', text: c.solution, color: c.color },
                    { label: 'Result', text: c.result, color: '#10b981' },
                  ].map(({ label, text, color }) => (
                    <div key={label} style={{
                      padding: '32px 40px',
                      borderRight: '1px solid rgba(148,163,184,0.06)',
                    }}>
                      <div style={{
                        fontSize: '11px', fontWeight: 700, color,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px',
                      }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
                        {label}
                      </div>
                      <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.8 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 120px' }}>
        <ScrollReveal>
          <div style={{
            maxWidth: '700px', margin: '0 auto', textAlign: 'center',
            padding: '64px', borderRadius: '24px',
            background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.18)',
          }}>
            <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.03em' }}>Ready to Be the Next Case Study?</h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '32px', lineHeight: 1.7 }}>Start with a complimentary diagnostic of your biggest strategic opportunity.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 0 30px rgba(16,185,129,0.3)',
              }}>
                Start Your Transformation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
