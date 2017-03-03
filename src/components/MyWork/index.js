import React from 'react';
import styled from 'styled-components';
import WorkItem from './WorkItem';
import { margin, maxWidth, mediumUpQuery } from '../../globals/sizes';
import { primary, secondary, black } from '../../globals/colors';
import { sectionTitle } from '../../globals/fonts';

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

const MyWork = ({
  title,
  workItems,
}) => (
  <WorksWrapper id="my-work">
    <Polygon1 />
    <Polygon2 />
    <Clip>
      <InnerWrapper>
        <Title>{ title }</Title>
        <WorkItemsWrapper>
          { workItems.map((workItem, index) => <WorkItem key={index} { ...workItem } />) }
        </WorkItemsWrapper>
      </InnerWrapper>
    </Clip>
  </WorksWrapper>
);

export default MyWork;