import React from 'react';
import styled from '@emotion/styled';
import { SkillsSwapper } from '../SkillsSwapper';
import { Summary } from '../Summary';
import { margin, maxWidth } from '../../globals/sizes';
import { sectionTitle } from '../../globals/fonts';

interface Props {
  title: string;
  summary: string[];
  skills: string[];
  skillsStartCopy: string;
}

export const AboutMe = ({ title, summary, skills, skillsStartCopy }: Props) => (
  <AboutMeWrapper id="about-me">
    <Title>{title}</Title>
    {summary.map((copy, i) => (
      <Summary key={i} copy={copy} />
    ))}
    <SkillsSwapper copy={skillsStartCopy} skills={skills} />
  </AboutMeWrapper>
);

const AboutMeWrapper = styled('section')`
  margin: ${5 * margin}px auto;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
`;

const Title = styled('h2')`
  font-size: ${sectionTitle}px;
`;
