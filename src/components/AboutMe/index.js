import React from 'react';
import styled from 'styled-components';
import SkillsSwapper from './SkillsSwapper';
import { margin, maxWidth } from '../../globals/sizes';
import { black } from '../../globals/colors';
import { sectionTitle, bodyCopy, bodyLineHeight } from '../../globals/fonts';

const copy = 'Blake is a Javascript developer with 3+ years of experience planning, creating, and maintaining websites and various application platforms. Some technologies that he uses on a regular basis are React, Angular, and Ionic. His projects include client and consumer facing websites, as well as react-native and hybrid applications. He has experience working in a team environment, exceeds in time management skills, and strives to remain on the cutting-edge of the front-end development scene.';

const AboutMeWrapper = styled.section`
  margin: ${3 * margin}px auto;
  padding: 0 ${ margin }px;
  max-width: ${ maxWidth }px;
`;

const Title = styled.h2`
  font-size: ${ sectionTitle }px;
  color: ${ black };
`;

const Summary = styled.p`
  color: ${ black };
  padding: 0 ${ margin }px;
  font-size: ${ bodyCopy }px;
  line-height: ${ bodyLineHeight }em;
  margin: 0;
  padding: 0;
`;

const AboutMe = () => (
  <AboutMeWrapper id="about-me">
    <Title>About Me.</Title>
    <Summary>{ copy }</Summary>
    <SkillsSwapper copy="I know" />
  </AboutMeWrapper>
);

export default AboutMe;
