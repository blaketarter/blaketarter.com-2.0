import React from 'react';
import styled from 'react-emotion';
import Link from '../Link';
import {
  white,
  grey,
  secondary,
  lightGrey,
  darkBackground,
} from '../../globals/colors';
import { bodyCopy } from '../../globals/fonts';
import { margin, smallUpQuery, darkModeQuery } from '../../globals/sizes';

const halfSize = `
  width: 50%;
  margin: 0;
`;

const fullSize = `
  width: 100%;
`;

const WorkItemWrapper = styled('li')`
  position: relative;
  background: ${white};
  list-style: none;
  margin: ${margin}px;
  padding: ${margin}px;
  transition: 0.2s ease;
  ${props => (props.isFeatured ? 'box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2)' : '')};

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }

  ${darkModeQuery} {
    background: ${darkBackground};
  }

  ${smallUpQuery} {
    ${props => (props.isFeatured ? fullSize : halfSize)};
    background: ${props => (props.isFeatured ? white : 'transparent')};

    ${darkModeQuery} {
      background: ${props => (props.isFeatured ? darkBackground : 'transparent')};
    }
  }
`;

const InnerWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${smallUpQuery} {
    flex-direction: row;
  }
`;

const Title = styled('h3')`
  font-size: ${bodyCopy}px;
  color: ${grey};

  ${darkModeQuery} {
    color: ${white};
  }
`;

const Copy = styled('p')`
  font-size: ${bodyCopy}px;
  position: relative;
`;

const Thumb = styled('img')`
  width: 100%;
  max-height: 300px;
  object-fit: cover;

  ${smallUpQuery} {
    height: 100%;
  }
`;

const Left = styled('div')`
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

const Right = styled('div')`
  z-index: 10;
  flex: 2;
  padding-left: ${margin}px;
`;

const Tags = styled('span')`
  color: ${secondary};

  ${smallUpQuery} {
    color: ${props => (props.isFeatured ? secondary : lightGrey)};
  }
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
    const { title, desc, url, img, source, alt = title } = this.props;

    return (
      <WorkItemWrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        hovered={this.state.hovered}
        isFeatured={this.isFeatured}
      >
        <InnerWrapper>
          <Left>
            <Thumb src={'images/' + img} alt={alt} />
          </Left>
          <Right>
            <Title>
              {title}
              <Tags isFeatured={this.isFeatured}>
                {' '}
                / {this.props.tags.join(' / ')}
              </Tags>
            </Title>
            <Copy hovered={this.state.hovered}>{desc}</Copy>
            <Link href={url}>See it on {source}.</Link>
          </Right>
        </InnerWrapper>
      </WorkItemWrapper>
    );
  }
}

export default WorkItem;
