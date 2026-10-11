import { FadeIn } from './FadeIn';
import { skills } from '../data/portfolio';
import './Skills.css';

/** The count card is a metric, not a capability — it already sits in About. */
const items = skills.filter(s => s.icon !== 'count');

export function Skills() {
  return (
    <section className="cap" id="skills">
      <div className="cap__inner">
        <FadeIn y={40}>
          <h2 className="cap__h2">Capabilities</h2>
        </FadeIn>

        <div className="cap__list">
          {items.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1} y={24}>
              <article className="cap__item">
                <div className="cap__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="cap__body">
                  <h3 className="cap__name">{s.title}</h3>
                  <p className="cap__desc">{s.desc}</p>
                  <ul className="cap__tags">
                    {s.tags.map(t => (
                      <li key={t.label} className={`cap__tag cap__tag--${t.tone}`}>{t.label}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
