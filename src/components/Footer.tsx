import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>
          Conçu & développé par{' '}
          <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>
            Pierre-Alexis Foy
          </span>{' '}
          · React + TypeScript + Framer Motion
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            color: 'var(--text-3)',
            cursor: 'pointer',
            border: '1px solid var(--border)',
            background: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: 8,
          }}
        >
          <ArrowUp size={14} />
          Retour en haut
        </motion.button>
      </div>
    </footer>
  );
}
