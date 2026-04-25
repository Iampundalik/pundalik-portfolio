import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueePkg from 'react-fast-marquee';
import './Loading.css';

const Marquee = ((MarqueePkg as unknown as { default?: typeof MarqueePkg }).default ?? MarqueePkg) as typeof MarqueePkg;

type Props = { onDone: () => void };

export function Loading({ onDone }: Props) {
  const [percent, setPercent] = useState(0);
  const [reached, setReached] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let p = 0;
    const tick = () => {
      const step = p < 60 ? Math.round(Math.random() * 6) + 2 : Math.round(Math.random() * 3) + 1;
      p = Math.min(100, p + step);
      setPercent(p);
      if (p >= 100) {
        setReached(true);
        setTimeout(() => setWelcomeOpen(true), 450);
        return;
      }
      setTimeout(tick, p < 60 ? 90 : 130);
    };
    const t = setTimeout(tick, 250);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    if (!welcomeOpen) return;
    setRevealed(true);
    setTimeout(() => {
      setHidden(true);
      onDone();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loader__expand"
            initial={{ scale: 1, opacity: 0 }}
            animate={revealed ? { scale: 25, opacity: 1 } : { scale: 1, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.83, 0, 0.17, 1] }}
          />

          <header className="loader__header">
            <motion.div
              className="loader__logo"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              PM<span>.</span>QA
            </motion.div>
            <motion.div
              className="loader__pong"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="loader__pong-grid">
                {Array.from({ length: 24 }).map((_, i) => <span key={i} />)}
              </div>
              <motion.div
                className="loader__pong-ball"
                animate={{ x: [0, 110, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </header>

          <div className="loader__marquee">
            <Marquee speed={60} gradient={false}>
              <span>SENIOR QA ENGINEER</span>
              <span className="loader__diamond">◆</span>
              <span>iGAMING SPECIALIST</span>
              <span className="loader__diamond">◆</span>
              <span>AUTOMATION-FIRST</span>
              <span className="loader__diamond">◆</span>
              <span>ISTQB CERTIFIED</span>
              <span className="loader__diamond">◆</span>
              <span>AI-ASSISTED TESTING</span>
              <span className="loader__diamond">◆</span>
              <span>SENIOR QA ENGINEER</span>
              <span className="loader__diamond">◆</span>
              <span>iGAMING SPECIALIST</span>
              <span className="loader__diamond">◆</span>
              <span>AUTOMATION-FIRST</span>
              <span className="loader__diamond">◆</span>
              <span>ISTQB CERTIFIED</span>
              <span className="loader__diamond">◆</span>
              <span>AI-ASSISTED TESTING</span>
              <span className="loader__diamond">◆</span>
            </Marquee>
          </div>

          <div className="loader__stage">
            <motion.button
              type="button"
              className={`loader__btn ${reached ? 'loader__btn--ready' : ''} ${welcomeOpen ? 'loader__btn--welcome' : ''}`}
              onClick={handleEnter}
              whileHover={welcomeOpen ? { scale: 1.05 } : undefined}
              whileTap={welcomeOpen ? { scale: 0.96 } : undefined}
              disabled={!welcomeOpen}
              aria-label={welcomeOpen ? 'Enter portfolio' : `Loading ${percent}%`}
            >
              <div className="loader__btn-fill" style={{ width: `${percent}%` }} />
              <div className="loader__btn-content">
                {welcomeOpen ? (
                  <span className="loader__btn-welcome">WELCOME →</span>
                ) : (
                  <>
                    <span className="loader__btn-label">LOADING</span>
                    <span className="loader__btn-pct">{percent}%</span>
                  </>
                )}
              </div>
            </motion.button>
          </div>

          <div className="loader__bottom">
            <span>v1.0 · QA PORTFOLIO</span>
            <span>PUNDALIK MHAMAL</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
