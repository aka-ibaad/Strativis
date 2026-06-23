'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Brain, Globe, BarChart3, Shield, TrendingUp, Users,
  ChevronDown, ArrowRight, CheckCircle, Zap
} from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const services = [
  {
    id: 'strategy',
    icon: Brain,
    title: 'Strategy Consulting',
    tagline: 'Board-Level Strategic Clarity',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.2)',
    summary: 'We craft and execute enterprise strategies that position organizations for sustained competitive advantage — from market entry to portfolio transformation.',
    deliverables: [
      'Corporate strategy and long-range planning',
      'Market entry and expansion strategies',
      'Competitive intelligence and positioning',
      'Portfolio rationalization and capital allocation',
      'Business model innovation and design',
      'Strategic due diligence for M&A',
    ],
    outcomes: ['Average 3.2× revenue growth within 24 months', '92% of strategies fully implemented', 'C-suite satisfaction score: 9.4/10'],
  },
  {
    id: 'digital',
    icon: Globe,
    title: 'Digital Transformation',
    tagline: 'End-to-End Digital Reinvention',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.2)',
    summary: 'We architect and execute digital transformations that modernize your enterprise — from cloud migration to AI integration and data platform engineering.',
    deliverables: [
      'Enterprise cloud migration and architecture',
      'AI/ML strategy and implementation',
      'Legacy system modernization',
      'Data platform and analytics engineering',
      'Customer experience digitization',
      'Technology roadmap and governance',
    ],
    outcomes: ['67% average reduction in IT operational costs', '340% improvement in digital capability index', '18-month average time to full transformation'],
  },
  {
    id: 'ops',
    icon: BarChart3,
    title: 'Operational Excellence',
    tagline: 'Measurable Efficiency Transformation',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
    summary: 'We deploy lean six-sigma and proprietary operational frameworks to systematically eliminate waste, reduce costs, and accelerate throughput across your value chain.',
    deliverables: [
      'Process mapping and optimization',
      'Lean Six Sigma implementation',
      'Supply chain and logistics redesign',
      'Manufacturing excellence programs',
      'Service delivery transformation',
      'Continuous improvement culture',
    ],
    outcomes: ['52% average cost reduction in targeted processes', '89% on-time delivery improvement', 'Payback period under 6 months'],
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk & Governance',
    tagline: 'Enterprise Resilience Framework',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.2)',
    summary: 'We design and implement enterprise risk frameworks, compliance architectures, and business continuity programs that protect your organization in an uncertain world.',
    deliverables: [
      'Enterprise risk management (ERM) design',
      'Regulatory compliance architecture',
      'Board governance frameworks',
      'Cybersecurity risk assessment',
      'Business continuity and crisis management',
      'ESG strategy and reporting',
    ],
    outcomes: ['100% regulatory compliance maintained', '78% reduction in risk incidents', 'Average 2.1× improvement in audit scores'],
  },
  {
    id: 'ma',
    icon: TrendingUp,
    title: 'M&A Advisory',
    tagline: 'Value Creation Through Transactions',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
    summary: 'We guide enterprises through the full M&A lifecycle — from target identification and due diligence to post-merger integration and value realization.',
    deliverables: [
      'Target screening and valuation',
      'Strategic and operational due diligence',
      'Deal structuring and negotiation support',
      'Day-1 readiness and 100-day planning',
      'Post-merger integration management',
      'Synergy identification and capture',
    ],
    outcomes: ['$12B+ in transaction value advised', '94% of synergy targets achieved', 'Average integration complete in 14 months'],
  },
  {
    id: 'leadership',
    icon: Users,
    title: 'Executive Leadership',
    tagline: 'Building World-Class Leaders',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.2)',
    summary: 'We develop the leadership capabilities that drive organizational transformation — from C-suite coaching to talent pipeline acceleration and culture change.',
    deliverables: [
      'C-suite executive coaching programs',
      'Leadership assessment and development',
      'Succession planning and pipeline design',
      'Organizational culture transformation',
      'Change management and communication',
      'Talent strategy and workforce planning',
    ],
    outcomes: ['89-point average improvement in leadership NPS', '73% reduction in leadership turnover', '2.4× acceleration in high-potential promotion'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{
        borderRadius: '20px',
        background: 'rgba(15,23,42,0.8)',
        border: `1px solid ${expanded ? service.color + '30' : 'rgba(148,163,184,0.08)'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
    >
      <button
        id={service.id}
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none',
          padding: '28px 32px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '14px',
            background: `${service.color}18`,
            border: `1px solid ${service.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Icon size={24} color={service.color} />
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: service.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{service.tagline}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>{service.title}</h3>
          </div>
        </div>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} color="#64748b" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ padding: '0 32px 32px', borderTop: `1px solid ${service.color}15` }}>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, margin: '20px 0 28px' }}>{service.summary}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Key Deliverables</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.deliverables.map((d) => (
                      <div key={d} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle size={15} color={service.color} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: '14px', color: '#cbd5e1' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>Client Outcomes</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.outcomes.map((o) => (
                      <div key={o} style={{
                        padding: '12px 16px', borderRadius: '10px',
                        background: `${service.color}0e`,
                        border: `1px solid ${service.color}20`,
                      }}>
                        <span style={{ fontSize: '13px', color: service.color, fontWeight: 500 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: '#030712', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px',
              borderRadius: '100px', background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)', marginBottom: '24px',
            }}>
              <Zap size={12} color="#6366f1" fill="#6366f1" />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#a5b4fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Expertise</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f8fafc', lineHeight: 1.05, marginBottom: '20px' }}
          >
            Services Built for{' '}
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Enterprise Scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.7 }}
          >
            Click any service to explore our full methodology, deliverables, and proven client outcomes.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '20px 24px 120px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 120px' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: '64px', borderRadius: '24px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.03em' }}>Not Sure Where to Start?</h2>
            <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '32px', lineHeight: 1.7 }}>Our diagnostic team will map your biggest opportunities in a complimentary 60-minute strategy session.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none',
              }}>
                Book a Free Strategy Session <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
