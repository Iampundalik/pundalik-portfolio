import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { SectionHead } from './SectionHead';
import { Tilt } from './Tilt';
import { projects } from '../data/portfolio';
import { QAImage } from './QAMockups';
import './Projects.css';

export function Projects() {
  return (
    <section className="section alt" id="projects">
      <SectionHead
        label="04 PROJECTS"
        line1="THINGS"
        line2="BUILT"
        sub="Hands-on automation frameworks, scrapers and AI experiments."
      />

      <div className="proj">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1}>
            <Tilt className="tilt">
            <motion.article
              className="proj__card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ ['--accent' as string]: p.accent }}
            >
              <div className="proj__media">
                <QAImage kind={p.image} accent={p.accent} />
              </div>
              <div className="proj__body">
                <div className="proj__top">
                  <div className="proj__name">{p.name}</div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj__gh">
                    <GithubIcon size={11} /> GitHub <ArrowUpRight size={10} />
                  </a>
                </div>
                <p className="proj__desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map(t => (
                    <span key={t.label} className={`tag ${t.tone}`}>{t.label}</span>
                  ))}
                </div>
              </div>
            </motion.article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
