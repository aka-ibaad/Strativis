'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#who-we-are', label: 'Who We Are' },
  { href: '/#what-we-do', label: 'What We Do' },
  { href: '/#proof-points', label: 'Proof Points' },
  { href: '/#our-team', label: 'Our Team' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(3, 7, 18, 0.6)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                }}
              >
                <div style={{ display: 'flex', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f8fafc' }} />
                </div>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  color: '#f8fafc',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  marginRight: '-0.2em',
                }}>Strativis</span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="hidden md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ y: -1, background: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      style={{
                        padding: '8px 18px', borderRadius: '8px',
                        fontSize: '14px', fontWeight: 500,
                        color: isActive ? '#f8fafc' : '#cbd5e1',
                        background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                        border: isActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.06)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '9px 22px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: '#fff', fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none', display: 'none',
                }}
                className="hidden md:inline-flex"
              >
                Get Started
              </motion.a>

              {/* Mobile toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: 'rgba(148, 163, 184, 0.1)', border: 'none',
                  borderRadius: '8px', padding: '8px', cursor: 'pointer',
                  color: '#f8fafc', display: 'flex', alignItems: 'center',
                }}
                className="flex md:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: '72px', left: 0, right: 0,
              zIndex: 999, background: 'rgba(3, 7, 18, 0.97)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
              padding: '16px 24px 24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '1280px', margin: '0 auto' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: 'block', padding: '12px 16px', borderRadius: '10px',
                      fontSize: '16px', fontWeight: 500, textDecoration: 'none',
                      color: pathname === link.href ? '#f8fafc' : '#94a3b8',
                      background: pathname === link.href ? 'rgba(99,102,241,0.15)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '12px' }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: 'block', textAlign: 'center', padding: '13px',
                    borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: '#fff', fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
