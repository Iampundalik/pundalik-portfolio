import { motion } from 'framer-motion';
import { Award, ShieldCheck, Workflow, Code2, GraduationCap, Cpu } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { certs } from '../data/portfolio';
import './Certs.css';

const ICONS = [Award, ShieldCheck, Workflow, Code2, GraduationCap, Cpu];

export function Certs() {
  return (
    <section className="section" id="certs">
      <SectionHead label="06 CREDENTIALS" line1="CERTS &" line2="EDUCATION" />

      <div className="certs">
        {certs.map((c, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={c.name} delay={(i % 3) * 0.07}>
              <motion.div
                className={`cert ${c.star ? 'cert--star' : ''}`}
                whileHover={{ x: 3, borderColor: 'rgba(0,212,255,0.25)' }}
              >
                <div className={`cert__badge ${c.star ? 'cert__badge--star' : ''}`}>
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <div className={`cert__name ${c.star ? 'cert__name--hl' : ''}`}>{c.name}</div>
                  <div className="cert__date">{c.date}</div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
