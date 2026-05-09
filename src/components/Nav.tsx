import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
];

const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

const navStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 'var(--nav-h)',
  zIndex: 1000,
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      style={navStyles}
      animate={{
        backgroundColor: scrolled ? 'rgba(8,8,16,0.85)' : 'rgba(8,8,16,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.12)' : '1px solid transparent',
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink('#hero'); }}
          style={{
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PA.FOY
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="nav-links-desktop">
          {links.map((l) => {
            const id = l.href.replace('#', '');
            const isActive = active === id;
            return (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '0.45rem 0.8rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text)' : 'var(--text-2)',
                  borderRadius: 8,
                  background: isActive ? 'var(--bg-3)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                }}
              >
                {l.label}
              </motion.a>
            );
          })}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLink('#contact'); }}
            whileHover={{ scale: 1.03, opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1.1rem',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              color: '#fff',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '0.85rem',
            }}
          >
            Contact
          </motion.a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text)',
            flexDirection: 'column',
            gap: 5,
          }}
          className="nav-toggle"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'currentColor', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)',
              left: 0,
              right: 0,
              background: 'rgba(8,8,16,0.97)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}
            className="nav-mobile"
          >
            {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
                style={{
                  padding: '0.75rem',
                  textAlign: 'center',
                  color: 'var(--text-2)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  borderRadius: 8,
                  background: 'var(--bg-3)',
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
