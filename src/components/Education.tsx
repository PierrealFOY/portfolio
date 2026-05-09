import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const diplomas = [
  {
    icon: '🎓',
    degree: 'Titre Concepteur Développeur d\'Applications',
    level: 'RNCP Niveau 6 (Bac+3)',
    school: 'O\'Clock / Sportall',
    date: 'Septembre 2025',
    detail: '18 mois en alternance · 798h de formation',
  },
  {
    icon: '📜',
    degree: 'Titre Développeur Web et Web Mobile',
    level: 'RNCP Niveau 5',
    school: 'Ministère du Travail',
    date: 'Mai 2023',
    detail: null,
  },
];

const languages = [
  { flag: '🇫🇷', name: 'Français', level: 'Natif' },
  { flag: '🇬🇧', name: 'Anglais', level: 'Courant' },
  { flag: '🇪🇸', name: 'Espagnol', level: 'Intermédiaire' },
  { flag: '🇷🇺', name: 'Russe', level: 'Débutant' },
];

const interests = [
  { icon: '🌍', label: 'Cultures & civilisations étrangères' },
  { icon: '🏔️', label: 'Randonnée / Course à pied' },
  { icon: '🎬', label: 'Lecture / Cinéma' },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} style={{ padding: '7rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: '2rem', height: 1, background: 'var(--accent)' }} />
            Formation
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}>
            Formation &{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              divers
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {diplomas.map((d, i) => (
            <motion.div
              key={d.degree}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: 'var(--border-2)' }}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.12))',
                border: '1px solid var(--border-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1rem',
              }}>
                {d.icon}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                {d.degree}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.2rem' }}>
                {d.level}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', marginBottom: '0.5rem' }}>
                {d.school}
              </div>
              {d.detail && (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontStyle: 'italic', marginBottom: '0.35rem' }}>
                  {d.detail}
                </div>
              )}
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-3)' }}>
                {d.date}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
        }} className="edu-bottom-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Langues
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {languages.map((l) => (
                <motion.div
                  key={l.name}
                  whileHover={{ y: -2, borderColor: 'var(--border-2)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.9rem',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 99,
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--text-2)',
                  }}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-3)' }}>
                    {l.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Centres d'intérêt
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {interests.map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--text-2)',
                  fontSize: '0.875rem',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
