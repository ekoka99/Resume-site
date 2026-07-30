import {FC, memo, ReactNode} from 'react';

import {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content, context, companyUrl} = item;

  return (
    <article className="timeline-item">
      <div className="timeline-item__meta">
        <span>{date}</span>
        <span>
          {companyUrl ? (
            <a href={companyUrl} rel="noreferrer" target="_blank">
              {location} ↗
            </a>
          ) : (
            location
          )}
        </span>
      </div>
      <div className="timeline-item__body">
        <h3>{title as ReactNode}</h3>
        {context && <p className="timeline-item__context">{context}</p>}
        {content}
      </div>
    </article>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
