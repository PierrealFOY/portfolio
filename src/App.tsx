import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <About />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <Skills />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <Experience />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <Projects />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <Education />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2), transparent)', margin: '0 auto', maxWidth: 1100 }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
