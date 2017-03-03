import React from 'react';
import styled from 'styled-components';
import SkillsSwapper from './SkillsSwapper';
import { margin, maxWidth } from '../../globals/sizes';
import { black } from '../../globals/colors';
import { sectionTitle, bodyCopy, bodyLineHeight } from '../../globals/fonts';

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

const AboutMe = ({
  title,
  summary,
  skills,
  skillsStartCopy,
}) => (
  <AboutMeWrapper id="about-me">
    <Title>{ title }</Title>
    <Summary>{ summary }</Summary>
    <SkillsSwapper copy={ skillsStartCopy } skills={ skills } />
  </AboutMeWrapper>
);

export default AboutMe;
