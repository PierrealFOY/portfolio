import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';

const projects = [
  {
    icon: '🔍',
    name: 'NextOffer',
    tagline: 'Agrégateur d\'offres d\'emploi multi-sources',
    desc: 'Application full-stack déployée en production agrégant les offres de France Travail et Remotive. Authentification JWT, gestion des favoris / offres vues / candidatures, déploiement VPS avec Nginx et SSL via Certbot.',
    tech: ['Vue 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'OAuth2', 'Pinia'],
    github: 'https://github.com/PierrealFOY',
    highlights: ['Production sur VPS OVH', 'SSL Let\'s Encrypt', 'API France Travail + Remotive'],
    screenshots: [`${process.env.PUBLIC_URL}/nextoffer1.png`, `${process.env.PUBLIC_URL}/nextoffer2.png`],
    accent: 'rgba(99,102,241,0.12)',
  },
  {
    icon: '🎫',
    name: 'Ticket & SaaS',
    tagline: 'Plateforme SaaS de gestion d\'entreprise',
    desc: 'Application multi-tenant complète : gestion de tickets, entreprises, employés et suivi du temps de travail. RBAC (Admin / Manager / Standard), rate limiting, système de migrations Alembic, suite de tests Pytest.',
    tech: ['Vue 3', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'TailwindCSS', 'Docker'],
    highlights: ['Multi-tenant SaaS', 'RBAC granulaire', 'Rate limiting Redis'],
    screenshots: [`${process.env.PUBLIC_URL}/saas1.png`, `${process.env.PUBLIC_URL}/saas2.png`],
    accent: 'rgba(168,85,247,0.12)',
  },
];

function BrowserMockup({ screenshots, name }: { screenshots: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => setActive((p) => (p + 1) % screenshots.length), 3200);
    return () => clearInterval(t);
  }, [hovered, screenshots.length]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-2)', background: 'var(--bg-3)', width: '100%' }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.55rem 0.85rem',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid var(--border)',
      }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
        ))}
        <div style={{
          flex: 1, marginLeft: '0.5rem',
          background: 'rgba(255,255,255,0.05)', borderRadius: 6,
          padding: '0.2rem 0.65rem',
          fontSize: '0.68rem', fontFamily: 'var(--mono)', color: 'var(--text-3)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {name === 'NextOffer' ? 'nextoffer.cloud' : 'localhost:5174 — Ticket & SaaS'}
        </div>
      </div>

      <div style={{ position: 'relative', background: 'var(--bg-3)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={screenshots[active]}
            alt={`${name} — vue ${active + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </AnimatePresence>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'center', gap: '0.4rem',
        padding: '0.55rem 0',
        borderTop: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 22 : 6, height: 6,
              borderRadius: 99,
              background: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--mono)', fontSize: '0.75rem', fontWeight: 500,
            color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: '2rem', height: 1, background: 'var(--accent)' }} />
            Projets
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Projets{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              personnels
            </span>
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', maxWidth: 520, lineHeight: 1.7, marginBottom: '3rem' }}>
            Deux applications full-stack développées de bout en bout — de l'architecture à la mise en production.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border-2)',
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />

              <div
                className="project-inner"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                }}
              >
                <div style={{
                  padding: '2.25rem',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  order: 0,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        padding: '0.22rem 0.6rem', background: p.accent,
                        border: '1px solid var(--border-2)', borderRadius: 99,
                        fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.65rem',
                      }}>
                        ★ Projet phare
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: '1.4rem' }}>{p.icon}</span>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', margin: 0 }}>
                          {p.name}
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, fontFamily: 'var(--mono)', marginTop: '0.2rem' }}>
                        {p.tagline}
                      </p>
                    </div>
                    {p.github && (
                      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, paddingTop: '0.25rem' }}>
                        <motion.a
                          href={p.github} target="_blank" rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-3)' }}
                          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--accent)'; el.style.borderColor = 'var(--border-2)'; el.style.background = 'var(--glow)'; }}
                          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-3)'; el.style.borderColor = 'var(--border)'; el.style.background = 'transparent'; }}
                        ><GithubIcon size={16} /></motion.a>
                      </div>
                    )}
                  </div>

                  <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.75, flex: 1 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.highlights.map((h) => (
                      <span key={h} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        padding: '0.25rem 0.6rem',
                        background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
                        borderRadius: 6, fontSize: '0.7rem', color: 'var(--accent-3)', fontWeight: 500,
                      }}>✓ {h}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                    {p.tech.map((t) => (
                      <span key={t} style={{
                        padding: '0.2rem 0.55rem', background: 'var(--bg-3)',
                        border: '1px solid var(--border)', borderRadius: 5,
                        fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-3)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{
                  order: 1,
                  padding: '1.5rem',
                  display: 'flex', alignItems: 'center',
                  background: `linear-gradient(135deg, ${p.accent}, transparent)`,
                  borderLeft: '1px solid var(--border)',
                }}>
                  <BrowserMockup screenshots={p.screenshots} name={p.name} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <motion.a
            href="https://github.com/PierrealFOY"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.7rem 1.4rem', background: 'transparent', color: 'var(--text-2)',
              borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', border: '1px solid var(--border-2)',
            }}
          >
            <GithubIcon size={16} />
            Voir tous mes projets sur GitHub
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-inner {
            grid-template-columns: 1fr !important;
          }
          .project-inner > div {
            order: unset !important;
            border-left: none !important;
            border-right: none !important;
          }
          .project-inner > div:last-child {
            border-top: 1px solid var(--border);
          }
        }
      `}</style>
    </section>
  );
}
