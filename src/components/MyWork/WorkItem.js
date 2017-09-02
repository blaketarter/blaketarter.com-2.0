import React from 'react';
import styled from 'styled-components';
import { white, grey, primary, black } from '../../globals/colors';
import { bodyCopy } from '../../globals/fonts';
import { margin, mediumUpQuery, smallUpQuery } from '../../globals/sizes';

const WorkItemWrapper = styled.li`
  position: relative;
  background: ${white};
  list-style: none;
  margin: ${margin}px;
  padding: ${margin}px;
  transition: 0.2s ease;

  ${smallUpQuery} {
    background: ${props => (props.isFeatured ? white : 'transparent')};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${smallUpQuery} {
    flex-direction: row;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${primary};
  font-size: ${bodyCopy}px;
  margin: ${margin}px;
`;

const Title = styled.h3`
  font-size: ${bodyCopy}px;
  color: ${grey};
  margin-left: ${margin}px;
`;

const Copy = styled.p`
  font-size: ${bodyCopy}px;
  color: ${black};
  margin: ${margin}px;
  position: relative;
`;

const Thumb = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;

  ${smallUpQuery} {
    height: 100%;
  }
`;

const Left = styled.div`
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  ${smallUpQuery} {
    height: 250px;
  }
`;

const Right = styled.div`
  z-index: 10;
  flex: 2;
`;

class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  isFeatured = false;

  onMouseEnter = () => this.setState({ hovered: true });

  onMouseLeave = () => this.setState({ hovered: false });

  render() {
    const { title, desc, url, img } = this.props;

    return (
      <WorkItemWrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        hovered={this.state.hovered}
        isFeatured={this.isFeatured}
      >
        <InnerWrapper>
          <Left>
            <Thumb src={'images/' + img} />
          </Left>
          <Right>
            <Title>{title}</Title>
            <Copy hovered={this.state.hovered}>{desc}</Copy>
            <Link href={url}>See It.</Link>
          </Right>
        </InnerWrapper>
      </WorkItemWrapper>
    );
  }
}

export default WorkItem;
