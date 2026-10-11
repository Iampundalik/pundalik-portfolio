import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { DecorBlocks, DecorCube, DecorOrbit, DecorSphere } from './Decor';
import { metrics, profile } from '../data/portfolio';
import './About.css';

const BLURB =
  "Three and a half years testing live, real-money gaming platforms and enterprise software — a year and a half of it fully remote. Manual and automation, mobile and web, from spec review through production release. If it can break in front of a player, I want to find it first.";

export function About() {
  return (
    <section className="about" id="about">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="about__decor about__decor--tl">
        <DecorSphere />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="about__decor about__decor--tr">
        <DecorBlocks />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="about__decor about__decor--bl">
        <DecorCube />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="about__decor about__decor--br">
        <DecorOrbit />
      </FadeIn>

      <div className="about__inner">
        <FadeIn y={40}>
          <h2 className="about__h2 hero-heading">About me</h2>
        </FadeIn>

        <AnimatedText text={BLURB} className="about__text atext" />

        <FadeIn delay={0.1} y={24}>
          <ul className="about__metrics">
            {metrics.map(m => (
              <li key={m.l}>
                <span className="about__metric-v">{m.v}</span>
                <span className="about__metric-l">{m.l}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <a href={`mailto:${profile.email}`} className="pill pill--grad">
            Contact Me <ArrowRight size={14} strokeWidth={2.6} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
