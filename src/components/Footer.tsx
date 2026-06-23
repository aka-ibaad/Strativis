import Link from 'next/link';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

// Custom inline SVG icons for social brands to prevent Lucide version discrepancies
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
    { label: 'Proof Points', href: '/#proof-points' },
    { label: 'Our Team', href: '/#our-team' },
    { label: 'Contact', href: '/#contact' },
  ],
  services: [
    { label: 'Fractional HR Solutions', href: '/#what-we-do' },
    { label: 'Talent Acquisition', href: '/#what-we-do' },
    { label: 'People Team Leadership', href: '/#what-we-do' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: '#030712',
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      padding: '80px 24px 32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
              }}>
                <Zap size={18} color="#fff" fill="#fff" />
              </div>
              <span style={{
                fontSize: '18px', fontWeight: 800,
                background: 'linear-gradient(135deg, #f8fafc, #94a3b8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Strativis</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px', marginBottom: '24px' }}>
              STRATIVIS is a boutique, founder-led HR consultancy built by two experienced executives who&apos;ve led people strategy in high-growth environments.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: InstagramIcon, href: 'https://instagram.com/strativis_hr_consulting', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === 'Instagram' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: '8px',
                    background: 'rgba(148, 163, 184, 0.06)',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#64748b', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Navigation</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Solutions</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={14} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="mailto:Info@strativis.io" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>Info@strativis.io</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={14} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="tel:3313358691" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>331-335-8691</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(148, 163, 184, 0.08)', marginBottom: '32px' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ color: '#64748b', fontSize: '13px' }}>
            © {new Date().getFullYear()} Strativis. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
