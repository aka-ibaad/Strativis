'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/#who-we-are' },
    { label: 'What We Do', href: '/#what-we-do' },
  ],
  services: [
    { label: 'Fractional HR Solutions', href: '/#what-we-do' },
    { label: 'Talent Acquisition', href: '/#what-we-do' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  const triggerAiChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  return (
    <footer style={{
      background: '#030712',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '48px 24px 24px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '4px',
              }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  color: '#f8fafc',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  marginRight: '-0.2em',
                }}>Strativis</span>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.6, maxWidth: '240px', marginBottom: '16px' }}>
              Boutique, founder-led HR consultancy built by experienced executives.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: InstagramIcon, href: 'https://instagram.com/strativis_hr_consulting', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 32, height: 32, borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Navigation</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Solutions</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support section */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Support</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a
                  href="#"
                  onClick={triggerAiChat}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#10b981',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    cursor: 'pointer',
                  }}
                >
                  Chat with AI Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Contact</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={12} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="mailto:Info@strativis.io" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Info@strativis.io</a>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={12} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="tel:3313358691" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>331-335-8691</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscribe block in the footer */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '12px',
          maxWidth: '560px',
          margin: '0 auto 40px auto',
        }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>
            People &amp; HR Insights, Monthly.
          </h4>
          <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, maxWidth: '400px' }}>
            Join our list to receive curated insights on HR strategy, talent trends, and the future of work — straight from practitioners, not theorists.
          </p>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing to Strativis Insights!");
          }} style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '380px', marginTop: '4px' }}>
            <input
              type="email"
              required
              placeholder="Your email address"
              style={{
                flex: 1,
                background: 'rgba(3, 7, 18, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
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
                background: 'linear-gradient(135deg,#10b981,#06b6d4)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 700,
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.05)', marginBottom: '20px' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ color: '#64748b', fontSize: '12px' }}>
            © {new Date().getFullYear()} Strativis. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} style={{ color: '#64748b', fontSize: '12px', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
