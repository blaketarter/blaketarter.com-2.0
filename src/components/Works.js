import React from 'react';
import styled from 'styled-components';
import WorkItem from './WorkItem';
import {  margin } from '../globals/sizes';
import { primary, secondary, black } from '../globals/colors';
import { sectionTitle } from '../globals/fonts';

const worksData = [
  {
    title: 'foo',
    desc: 'lorem ipsum dolor set amut, foo bar baz fizz buzz.',
    url: 'example.com',
  },
  {
    title: 'foo 2',
    desc: 'lorem ipsum dolor set amut, foo bar baz fizz buzz.',
    url: 'example.com',
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

const WorkItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${margin}px;
  padding: 0;
  justify-content: space-around;
`;

const Works = () => (
  <WorksWrapper>
    <Polygon1 />
    <Polygon2 />
    <Clip>
      <Title>My Work.</Title>
      <WorkItemsWrapper>
        {worksList}
      </WorkItemsWrapper>
    </Clip>
  </WorksWrapper>
);

export default Works;
