import React from 'react';
import styled from 'styled-components';
import { white, grey, primary, black } from '../globals/colors';
import { bodyCopy } from '../globals/fonts';
import { margin, mediumUpQuery } from '../globals/sizes';

const WorkItemWrapper = styled.li`
  position: relative;
  background: ${ white };
  list-style: none;
  margin-bottom: ${ margin }px;
  transform: ${ props => props.hovered ? 'scale(1.1)' : 'scale(1)' };
  transition: .2s ease;
  width: 100%;
  padding-bottom: 100%;

  ${ mediumUpQuery } {
    width: 30%;
    padding-bottom: 30%;
  }
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

const notHoveredClip = 'polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 20%)';
const hoveredClip = 'polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 10%)';

const Clip = styled.div`
  position: absolute;
  bottom: 0;
  height: 85%;
  width: 100%;
  background: ${ primary };
  font-size: ${ bodyCopy }px;
  clip-path: ${ props => props.hovered ? hoveredClip : notHoveredClip };
  transition: .2s ease;
`;

const Copy = styled.p`
  font-size: ${ bodyCopy }px;
  color: ${ black };
  margin: ${ margin }px;
  margin-top: 20%;
`;

class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  onMouseEnter = () => this.setState({ hovered: true })

  onMouseLeave = () => this.setState({ hovered: false })

  render() {
    const {
      title,
      desc,
      url,
    } = this.props;

    return (
      <WorkItemWrapper onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} hovered={this.state.hovered}>
        <Link href={url}>
          <Title>{title}</Title>
          <Clip hovered={this.state.hovered}>
            <Copy>{desc}</Copy>
          </Clip>
        </Link>
      </WorkItemWrapper>
    );
  }
}

export default WorkItem;
