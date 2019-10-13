import React from 'react';
import styled from '@emotion/styled'
import WorkItem from '../WorkItem/WorkItem';
import {
  margin,
  maxWidth,
  smallUpQuery,
  darkModeQuery,
} from '../../globals/sizes';
import { primary, secondary, primaryDark, darkLighterBackground, } from '../../globals/colors';
import { sectionTitle } from '../../globals/fonts';

interface Props {
  title: string;
  workItems: Array<{
    "title": string;
    "desc": string;
    "url": string;
    "img": string;
    "alt": string;
    "tags": string[];
    "source": string;
  }>;
}

const MyWork = ({ title, workItems }: Props) => (
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
                  <WorkItem key={workItem.url} isFeatured={index === 0} {...workItem} />
            )}
        </WorkItemsWrapper>
      </InnerWrapper>
    </Clip>
  </WorksWrapper>
);

const WorksWrapper = styled('section')`position: relative;`;

const Clip = styled('div')`
  background: ${secondary};
  clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  -webkit-clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 98%);
  padding: ${3 * margin}px 0;

  ${smallUpQuery} {
    clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
    -webkit-clip-path: polygon(0 0, 100% 7%, 100% 100%, 0 93%);
  }

  ${darkModeQuery} {
    background: ${darkLighterBackground};
  }
`;

const Title = styled('h2')`
  font-size: ${sectionTitle}px;
  margin-left: ${margin}px;
`;

const Polygon1 = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: top right;

  ${darkModeQuery} {
    opacity: 0.5;
  }
`;

const Polygon2 = styled('div')`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: ${primary};
  background: linear-gradient(to left, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(-1deg);
  transform-origin: bottom left;

  ${darkModeQuery} {
    opacity: 0.5;
  }
`;

const InnerWrapper = styled('div')`
  margin: 0 auto;
  max-width: ${maxWidth}px;
`;

const WorkItemsWrapper = styled('ul')`
  padding: 0;
  margin: ${margin * 3}px auto;

  ${smallUpQuery} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default MyWork;
