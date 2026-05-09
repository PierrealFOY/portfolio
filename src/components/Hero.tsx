import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, MapPin, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-10%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'var(--accent)', filter: 'blur(120px)', opacity: 0.1 }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'var(--accent-2)', filter: 'blur(120px)', opacity: 0.1 }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '40%', right: '20%', width: 350, height: 350, borderRadius: '50%', background: 'var(--accent-3)', filter: 'blur(140px)', opacity: 0.06 }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          position: 'relative', zIndex: 1,
          display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center',
          width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 2rem',
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%' }}
            />
            Disponible pour de nouvelles opportunités
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}
          >
            <span style={{ color: 'var(--text)', display: 'block', marginBottom: '32px' }}>Pierre-Alexis Foy</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
          >
            <span style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 500, color: 'var(--text-2)' }}>
              Développeur Full-Stack
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', background: 'var(--bg-3)', border: '1px solid var(--border-2)', borderRadius: 99, fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)' }}>
              <MapPin size={12} />
              Lyon / Full-Remote
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontSize: '1rem', color: 'var(--text-2)', maxWidth: 500, lineHeight: 1.8, marginBottom: '2.5rem' }}
          >
            Curieux et créatif, passionné par la conception d'applications performantes et orientées expérience utilisateur. Attention particulière à la <strong style={{ color: 'var(--text)' }}>sécurité</strong>, l'<strong style={{ color: 'var(--text)' }}>accessibilité</strong> et aux <strong style={{ color: 'var(--text)' }}>standards frontend élevés</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', color: '#fff', borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 24px rgba(99,102,241,0.3)' }}
            >
              Voir mes projets <ArrowDown size={16} />
            </motion.a>
            <motion.a
              href="mailto:pierre.alexis.56@gmail.com"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'transparent', color: 'var(--text-2)', borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', border: '1px solid var(--border-2)' }}
            >
              <Mail size={16} /> Me contacter
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '3rem', alignItems: 'center' }}
          >
            <span style={{ display: 'block', width: '2rem', height: 1, background: 'var(--text-3)' }} />
            {[
              { href: 'https://github.com/PierrealFOY', icon: <GithubIcon size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/pierre-alexis-foy', icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
            ].map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border)', color: 'var(--text-3)', transition: 'color 0.2s, border-color 0.2s, background 0.2s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--accent)';
                  el.style.borderColor = 'var(--border-2)';
                  el.style.background = 'var(--glow)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--text-3)';
                  el.style.borderColor = 'var(--border)';
                  el.style.background = 'transparent';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'relative', width: 240, height: 240 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: -14, borderRadius: '50%', border: '1px solid var(--border-2)' }}
            >
              <span style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 12px var(--accent)' }} />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: -28, borderRadius: '50%', border: '1px dashed rgba(99,102,241,0.15)' }}
            />
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '3px solid var(--bg-3)', overflow: 'hidden' }}>
              <img src="/photo_profil.jpg" alt="Pierre-Alexis Foy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ position: 'absolute', bottom: '0.5rem', right: '-2rem', background: 'var(--bg-2)', border: '1px solid var(--border-2)', borderRadius: 12, padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 500, whiteSpace: 'nowrap', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
          >
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ display: 'inline-block', width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }} />
            Open to work
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
