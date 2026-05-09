import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
      }}
    />
  );
}
