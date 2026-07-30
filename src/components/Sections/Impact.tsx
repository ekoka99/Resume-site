import {FC, memo} from 'react';

import {impactHighlights, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Impact: FC = memo(() => (
  <Section className="impact" sectionId={SectionId.Impact}>
    <div className="section-heading section-heading--light">
      <p>03 / 04 · Evidence</p>
      <h2>A few results.</h2>
    </div>
    <div className="impact-list">
      <p className="impact-list__intro">
        I care about work that saves the team time and makes failures easier to understand.
      </p>
      <div>
        {impactHighlights.map(({value, label, detail}) => (
          <article className="impact-row" key={label}>
            <strong>{value}</strong>
            <h3>{label}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </div>
  </Section>
));

Impact.displayName = 'Impact';
export default Impact;
