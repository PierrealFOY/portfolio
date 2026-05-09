import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    company: 'Lya Protect',
    role: 'Développeur Full-Stack',
    lieu: 'Lyon',
    date: '01/2026 – 05/2026',
    emoji: '🛡️',
    points: [
      'Développement backend (Node.js, NestJs, Prisma, MySQL) d\'une application de conformité pour professionnels du courtage.',
      'Création de routes, contrôleurs et méthodes de pagination côté back (Prisma) pour récupérer les contrôles depuis l\'API.',
      'Développement de la nouvelle interface avec multi-sidebars via contexte React pour la vérification des contrôles.',
    ],
    tags: ['NestJs', 'Prisma', 'MySQL', 'React', 'React Query', 'SCSS'],
  },
  {
    company: 'Sportall',
    role: 'Développeur Full-Stack',
    date: '11/2023 – 07/2025',
    lieu: 'Full Remote',
    emoji: '🏎️',
    points: [
      'Backend : création d\'un système de notification via WebSocket PubSub, optimisation des resolvers GraphQL → temps de réponse divisé par 3.',
      'Frontend : refonte UI totale du BackOffice (migration ShadCN), création d\'une sidebar de documentation multilingue (i18n) avec CRUD admin.',
      'Amélioration du live timing 24h du Mans, intégration Redis pour la mise en cache → fluidité accrue.',
      'Déploiement d\'apps web sur mesure pour nouveaux clients selon charte graphique (CI/CD, Docker, GitHub).',
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'TailwindCSS', 'i18n'],
  },
  {
    company: 'O\'Clock — BlablaBook',
    role: 'Lead Front · Développeur Full-Stack',
    date: '02/2025 – 05/2025',
    type: 'Projet de fin d\'études',
    emoji: '📚',
    points: [
      'Lead Front dans une équipe pluridisciplinaire pour une application de gestion de lectures personnelles.',
      'Développement du backend et du frontend, pilotage des choix d\'architecture frontend.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} style={{ padding: '7rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            Expériences
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            Parcours{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              professionnel
            </span>
          </h2>
        </motion.div>

        <div style={{ marginTop: '3rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: 20,
            top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, var(--border-2) 15%, var(--border-2) 85%, transparent)',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: '0 2rem',
                marginBottom: i < experiences.length - 1 ? '2.5rem' : 0,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.2rem' }}>
                <motion.div
                  whileHover={{ borderColor: 'var(--accent)', boxShadow: '0 0 20px var(--glow)' }}
                  style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    background: 'var(--bg-2)',
                    border: '2px solid var(--border-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {exp.emoji}
                </motion.div>
              </div>

              <motion.div
                whileHover={{ borderColor: 'var(--border-2)' }}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.5rem',
                }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                      {exp.company}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {exp.role}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-3)',
                      background: 'var(--bg-3)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 6,
                      whiteSpace: 'nowrap',
                    }}>
                      {exp.date}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontStyle: 'italic' }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{
                      position: 'relative',
                      paddingLeft: '1rem',
                      color: 'var(--text-2)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '0.7rem', top: '0.2rem' }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      borderRadius: 6,
                      fontFamily: 'var(--mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
