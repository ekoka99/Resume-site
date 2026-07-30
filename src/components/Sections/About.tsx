import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const operatingModel = [
    ['01', 'Understand it', 'Start with the problem, the risk, and the result the team needs.'],
    ['02', 'Get it working', 'Bring the hardware and software together, then make failures visible.'],
    ['03', 'Automate it', 'Turn repeated work into diagnostics, validation, calibration, and deployment tools.'],
    ['04', 'Make it last', 'Add the traceability and feedback loops production needs.'],
  ];

  return (
    <Section sectionId={SectionId.About}>
      <div className="section-heading">
        <p>02 / 04 · Operating model</p>
        <h2>How I work.</h2>
      </div>
      <div className="about-layout">
        {!!profileImageSrc && (
          <figure className="portrait">
            <Image alt="Elio Koka" priority src={profileImageSrc} />
            <figcaption>Elio Koka · Redwood City, CA</figcaption>
          </figure>
        )}
        <div className="about-copy">
          <p className="lede">{description}</p>
          <ol className="operating-model">
            {operatingModel.map(([number, title, detail]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <dl className="profile-facts">
            {aboutItems.map(({label, text}) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
