import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const groups = [
  {
    icon: '⚡',
    title: 'Frontend',
    tags: ['React', 'Vue 3', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'React Native', 'ShadCN'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    tags: ['Node.js', 'NestJs', 'FastAPI', 'GraphQL', 'REST API', 'WebSocket', 'Prisma', 'Mongoose'],
  },
  {
    icon: '🗄️',
    title: 'Bases de données',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLAlchemy', 'Alembic'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Outils',
    tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux', 'Git', 'VSCode'],
  },
  {
    icon: '🐍',
    title: 'Python',
    tags: ['FastAPI', 'Flask', 'TensorFlow', 'Pydantic', 'SQLAlchemy', 'Pytest'],
  },
  {
    icon: '🔑',
    title: 'Auth & Sécurité',
    tags: ['JWT', 'OAuth2', 'BCrypt', 'Rate Limiting', 'SSL / TLS', 'RBAC'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '7rem 0', position: 'relative', zIndex: 1 }}>
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
            Compétences
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            Stack{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              technique
            </span>
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.7, marginBottom: '3rem' }}>
            Polyvalent full-stack avec une préférence pour le frontend moderne et les architectures API robustes.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5, borderColor: 'var(--border-2)', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                cursor: 'default',
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
                {g.icon}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                {g.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {g.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--glow)' }}
                    style={{
                      display: 'inline-block',
                      padding: '0.28rem 0.65rem',
                      background: 'var(--bg-3)',
                      border: '1px solid var(--border)',
                      borderRadius: 6,
                      fontFamily: 'var(--mono)',
                      fontSize: '0.74rem',
                      color: 'var(--text-2)',
                      cursor: 'default',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
