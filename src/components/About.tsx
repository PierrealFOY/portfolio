import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: '10+', label: 'Technos maîtrisées' },
  { number: '2', label: 'Projets perso en prod' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const paragraphs: React.ReactNode[] = [
    <>Développeur Full-Stack curieux et créatif, j'ai forgé mon savoir-faire au fil de postes variés dans des
      environnements techniques exigeants.</>,
    <>J'aime concevoir des applications qui allient <strong style={{ color: 'var(--text)' }}>performance technique</strong> et <strong style={{ color: 'var(--text)' }}>expérience utilisateur soignée</strong>. À l'aise aussi bien sur le back (Node.js, FastAPI, GraphQL) que sur le front (React, Vue 3).</>,
    <>Toujours en veille sur les standards du frontend moderne, je porte une attention particulière à la <strong style={{ color: 'var(--text)' }}>qualité du code</strong>, à l'accessibilité et à la sécurité.</>,
  ];

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease }}
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
              À propos
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Passionné par{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                l'expérience utilisateur
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease }}
                  style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.95rem' }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease }}
                whileHover={{ y: -4, borderColor: 'var(--border-2)' as any }}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  cursor: 'default',
                }}
              >
                <div style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>
                  {s.number}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
