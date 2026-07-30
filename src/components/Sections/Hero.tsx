import {FC, memo} from 'react';

import {heroData, impactHighlights, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <main className="hero">
        <div className="hero__index">
          <span>Profile 01 / 04</span>
          <span>Redwood City, California</span>
        </div>
        <div className="hero__grid">
          <div className="hero__title">
            <p className="kicker">Humanoids · autonomous systems · production</p>
            <h1>{name}</h1>
          </div>
          <div className="hero__brief">
            {description}
            <div className="hero__actions">
              {actions.map(({href, text, primary, Icon}) => (
                <a className={primary ? 'text-link text-link--primary' : 'text-link'} href={href} key={text}>
                  {text}
                  {Icon && <Icon aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div aria-label="Selected engineering outcomes" className="hero__proof">
          {impactHighlights.map(({value, label}) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </main>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
