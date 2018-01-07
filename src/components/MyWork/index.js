import React from 'react';
import styled from 'preact-emotion';
import WorkItem from './WorkItem';
import FeaturedWorkItem from './FeaturedWorkItem';
import {
  margin,
  maxWidth,
  smallUpQuery,
} from '../../globals/sizes';
import { primary, secondary, black, secondaryDark, primaryDark, } from '../../globals/colors';
import { sectionTitle } from '../../globals/fonts';

const WorksWrapper = styled.section`position: relative;`;

const Clip = styled.div`
  background: ${secondary};
  // background: linear-gradient(to bottom right, ${secondaryDark} 0%, ${secondary} 50%, ${secondary} 100%);
  clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  -webkit-clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  padding: ${3 * margin}px 0;

  ${smallUpQuery} {
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
    -webkit-clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  }
`;

const Title = styled.h2`
  font-size: ${sectionTitle}px;
  color: ${black};
  margin-left: ${margin}px;
`;

const Polygon1 = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: top right;
`;

const Polygon2 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to left, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: bottom left;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth}px;
`;

const WorkItemsWrapper = styled.ul`
  padding: 0;
  margin: ${margin * 3}px auto;

  ${smallUpQuery} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const MyWork = ({ title, workItems }) => (
  <WorksWrapper id="my-work">
    <Polygon1 />
    <Polygon2 />
    <Clip>
      <InnerWrapper>
        <Title>{title}</Title>
        <WorkItemsWrapper>
          {workItems
            .slice(0, 5)
            .map(
              (workItem, index) =>
                index === 0 ? (
                  <FeaturedWorkItem key={index} {...workItem} />
                ) : (
                  <WorkItem key={index} {...workItem} />
                ),
            )}
        </WorkItemsWrapper>
      </InnerWrapper>
    </Clip>
  </WorksWrapper>
);

export default MyWork;
