import React from 'react';
import styled from 'styled-components';
import WorkItem from './WorkItem';
import { margin, maxWidth, mediumUpQuery } from '../globals/sizes';
import { primary, secondary, black } from '../globals/colors';
import { sectionTitle } from '../globals/fonts';

const worksData = [
  {
    title: 'Web Audio Synth',
    desc: 'Web-based synthesizer using a computer keyboard.',
    url: 'https://codepen.io/blaketarter/full/GgdOXd/',
  },
  {
    title: 'Random Text Replacer',
    desc: 'Exploration of how to make similar random phrases.',
    url: 'https://codepen.io/blaketarter/full/QbxKXm/',
  },
  {
    title: 'PaginatedListView',
    desc: 'Extension of React-Native ListView to allow easier pagination.',
    url: 'https://www.npmjs.com/package/react-native-paginated-listview',
  },
  {
    title: 'simple-fp',
    desc: 'A simple, small, no dependency functional programming library.',
    url: 'https://www.npmjs.com/package/simple-fp',
  },
  {
    title: 'Dungeon Gen',
    desc: 'Playing around with randomly generating ascii based dungeons.',
    url: 'https://github.com/blaketarter/dungeon-gen/blob/master/game.js',
  },
  {
    title: 'More Code Generator',
    desc: 'Javascript code that turns plain text into Morse Code style dots and dashes.',
    url: 'https://codepen.io/blaketarter/full/bNROPP/',
  },
];
const worksList = worksData.map((workItem, index) => <WorkItem key={index} { ...workItem } />);

const WorksWrapper = styled.section`
  position: relative;
`;

const Clip = styled.div`
  background: ${ secondary };
  clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  padding: ${3 * margin}px 0;
`;

const Title = styled.h2`
  font-size: ${sectionTitle}px;
  color: ${ black };
  margin-left: ${ margin }px;
`;

const Polygon1 = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: top right;
`;

const Polygon2 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: bottom left;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: ${ maxWidth }px;
`;

const WorkItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
  margin: ${margin * 3}px auto;
  width: 75%;

  ${ mediumUpQuery } {
    margin: ${margin}px;
    width: initial;
  }
`;

const MyWork = () => (
  <WorksWrapper id="my-work">
    <Polygon1 />
    <Polygon2 />
    <Clip>
      <InnerWrapper>
        <Title>My Work.</Title>
        <WorkItemsWrapper>
          {worksList}
        </WorkItemsWrapper>
      </InnerWrapper>
    </Clip>
  </WorksWrapper>
);

export default MyWork;
