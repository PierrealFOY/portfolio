import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const decode = (s: string) => atob(s);

const PRIVATE = {
  email: 'cGllcnJlLmFsZXhpcy41NkBnbWFpbC5jb20=',
  phone: 'MDYgNjAgODggMzEgMzA=',
  phoneTel: 'KzMzNjYwODgzMTMw',
};

function RevealItem({
  icon,
  masked,
  encoded,
  type,
  delay,
  inView,
}: {
  icon: React.ReactNode;
  masked: string;
  encoded: string;
  type: 'email' | 'phone';
  delay: number;
  inView: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    const value = decode(encoded);
    if (!revealed) {
      setRevealed(true);
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const displayLabel = revealed ? decode(encoded) : masked;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      whileHover={{ x: 4 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: 'var(--bg-3)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'var(--text-2)',
        textAlign: 'left',
        width: '100%',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        fontFamily: 'var(--font)',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
    >
      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.82rem', flex: 1 }}>
        {displayLabel}
      </span>
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.span
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontFamily: 'var(--mono)', flexShrink: 0 }}
          >
            cliquer pour révéler
          </motion.span>
        ) : copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ color: '#22c55e', flexShrink: 0 }}
          >
            <Check size={14} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ color: 'var(--text-3)', flexShrink: 0 }}
            title="Copier"
          >
            <Copy size={14} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const publicLinks = [
  {
    icon: <GithubIcon size={16} />,
    label: 'github.com/PierrealFOY',
    href: 'https://github.com/PierrealFOY',
  },
  {
    icon: <LinkedinIcon size={16} />,
    label: 'linkedin.com/in/pierre-alexis-foy',
    href: 'https://www.linkedin.com/in/pierre-alexis-foy',
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 0 10rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--mono)', fontSize: '0.75rem', fontWeight: 500,
            color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '1rem', justifyContent: 'center',
          }}>
            <span style={{ display: 'block', width: '2rem', height: 1, background: 'var(--accent)' }} />
            Contact
            <span style={{ display: 'block', width: '2rem', height: 1, background: 'var(--accent)' }} />
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Travaillons{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ensemble
            </span>
          </h2>

          <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Je suis disponible pour de nouvelles opportunités en freelance ou en CDI.
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>

          <motion.button
            onClick={() => { window.location.href = 'mailto:' + decode(PRIVATE.email); }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.9rem 2rem',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              color: '#fff', borderRadius: 12, fontWeight: 700, fontSize: '1rem',
              boxShadow: '0 8px 32px rgba(99,102,241,0.35)', marginBottom: '2.5rem',
              border: 'none', cursor: 'pointer', fontFamily: 'var(--font)',
            }}
          >
            <Mail size={18} />
            Envoyer un email
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ background: 'var(--bg-2)', border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
        >
          <RevealItem
            icon={<Mail size={16} />}
            masked="pierre.alexis.56[at]gmail[dot]com"
            encoded={PRIVATE.email}
            type="email"
            delay={0.3}
            inView={inView}
          />
          <RevealItem
            icon={<Phone size={16} />}
            masked="06 60 •• •• ••"
            encoded={PRIVATE.phone}
            type="phone"
            delay={0.37}
            inView={inView}
          />

          {publicLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.44 + i * 0.07 }}
              whileHover={{ x: 4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', background: 'var(--bg-3)',
                border: '1px solid var(--border)', borderRadius: 10,
                fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-2)',
                textAlign: 'left', transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-2)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{l.icon}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.82rem' }}>{l.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
