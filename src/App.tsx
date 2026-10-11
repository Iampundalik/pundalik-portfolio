import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { initSmoothScroll } from './lib/smoothScroll';
import { BackToTop } from './components/BackToTop';
import './App.css';
import { Background } from './components/Background';
import { ParallaxBg } from './components/ParallaxBg';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Loading } from './components/Loading';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Ticker } from './components/Marquee';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { QALab } from './components/QALab';
import { Certs } from './components/Certs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Divider() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="divider"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
      style={{ transformOrigin: 'left center' }}
    />
  );
}

function App() {
  const skipLoader = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('still');
  const [loading, setLoading] = useState(!skipLoader);
  const [revealed, setRevealed] = useState(skipLoader);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const t = setTimeout(() => setRevealed(true), reduce ? 0 : 60);
      return () => clearTimeout(t);
    }
  }, [loading, reduce]);

  // Start inertial scrolling only once the loader is gone.
  useEffect(() => {
    if (!revealed) return;
    return initSmoothScroll();
  }, [revealed]);

  return (
    <div className="app">
      <AnimatePresence>
        {loading && <Loading key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ParallaxBg />
      <Background />
      <Cursor />
      <ScrollProgress />

      <AnimatePresence>
        {revealed && (
          <motion.div
            key="content"
            initial={reduce ? false : { opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: 'center center', position: 'relative' }}
          >
            <a href="#about" className="skip-link">Skip to content</a>
            <Nav />
            <main id="main">
              <Hero />
              <Ticker />
              <About />
              <Skills />
              <Projects />
              <Divider />
              <Experience />
              <Divider />
              <Stack />
              <Divider />
              <QALab />
              <Divider />
              <Certs />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
