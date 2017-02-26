import React from 'react';
import SkillsSwapper from './SkillsSwapper';

const AboutMe = () => (
  <div id="about-me-wrapper">
    <h2 className="title">About Me.</h2>
    <p className="summary">Blake is a Javascript developer with 3+ years of experience planning, creating, and maintaining websites and various application platforms. Some technologies that he uses on a regular basis are React, Angular, and Ionic. His projects include client and consumer facing websites, as well as react-native and hybrid applications. He has experience working in a team environment, exceeds in time management skills, and strives to remain on the cutting-edge of the front-end development scene.</p>
    <SkillsSwapper copy="I know" />
  </div>
);

export default AboutMe;
