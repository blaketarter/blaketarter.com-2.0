import React from 'react';
import WorkItem from './WorkItem';

const worksData = [
  {
    title: '',
    desc: '',
    url: '',
  },
];
const worksList = worksData.map((workItem) => <WorkItem { ...workItem } />);

const Works = () => (
  <div className="works-wrapper">
    <div className="polygon-1"></div>
    <div className="polygon-2"></div>
    <div className="clip">
      <h2 className="title">My Work.</h2>
      { worksList }
    </div>
  </div>
);

export default Works;
