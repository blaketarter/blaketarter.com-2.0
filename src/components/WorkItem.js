import React from 'react';
import styled from 'styled-components';
import { white, grey, primary, black } from '../globals/colors';
import { bodyCopy } from '../globals/fonts';
import { margin } from '../globals/sizes';

const WorkItemWrapper = styled.li`
  position: relative;
  background: ${ white };
  list-style: none;
  margin-bottom: ${ margin }px;
  width: 47.5%;
  padding-bottom: 47.5%;
`;

const Link = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  position: absolute;
`;

const Title = styled.h3`
  font-size: ${ bodyCopy }px;
  color: ${ grey };
  margin-left: ${ margin }px;
`;

const Clip = styled.div`
  position: absolute;
  bottom: 0;
  height: 85%;
  width: 100%;
  background: ${ primary };
  font-size: ${ bodyCopy }px;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
`;

const Copy = styled.p`
  font-size: ${ bodyCopy }px;
  color: ${ black };
  margin: ${ margin }px;
  margin-top: 20%;
`;

const WorkItem = ({
  title,
  desc,
  url,
}) => (
  <WorkItemWrapper>
    <Link href={url}>
      <Title>{title}</Title>
      <Clip>
        <Copy>{desc}</Copy>
      </Clip>
    </Link>
  </WorkItemWrapper>
  );

export default WorkItem;
