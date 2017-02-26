import React from 'react';

const WorkItem = ({
  title,
  desc,
  url,
}) => (
  <div className="work-item-wrapper">
    <a className="work-item-link" href={url}>
      <h3 class="title">{title}</h3>
      <div className="clip">
        <p className="copy">{desc}</p>
      </div>
    </a>
  </div>
  );

export default WorkItem;
