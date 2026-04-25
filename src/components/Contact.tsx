import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { profile } from '../data/portfolio';
import './Contact.css';

export function Contact() {
  return (
    <section className="section alt" id="contact">
      <div className="contact__wrap">
        <Reveal>
          <div className="sec-label" style={{ justifyContent: 'center' }}>07 CONTACT</div>
          <h2 className="sec-h" style={{ textAlign: 'center', fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
            LET'S<br /><span className="d">TALK</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            className="contact__card"
            whileHover={{ borderColor: 'rgba(0,212,255,0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact__glow" />
            <div className="contact__avail">
              <span className="contact__avail-dot" />
              OPEN TO SENIOR QA / SDET / AUTOMATION ROLES
            </div>
            <p className="contact__intro">
              Senior Associate QA Engineer with full-stack testing expertise. iGaming domain.
              Automation-first. Remote, hybrid, or relocation.
            </p>
            <a href={`mailto:${profile.email}`} className="contact__email">
              <Mail size={20} /> {profile.email}
            </a>
            <div className="contact__links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__link">
                <Phone size={16} /> {profile.phone}
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
