import React from 'react';
import styled from 'preact-emotion';
import Link from '../Link';
import { margin } from '../../globals/sizes';
import { black } from '../../globals/colors';
import { bodyCopy, bodyLineHeight } from '../../globals/fonts';

const SummaryWrapper = styled('p')`
  color: ${ black };
  padding: 0 ${ margin }px;
  font-size: ${ bodyCopy }px;
  line-height: ${ bodyLineHeight }em;
  margin: 0;
  padding: 0;

  :nth-of-type(n+2) {
    margin-top: ${ margin }px;
  }
`;

const linkRe = /\[([\w\s']+)\]\(([\w|:|/|.]+)\)/g;

const Summary = ({ copy }) => {
  if (copy.search(linkRe) > -1) {
    const matches = []
    let match;
    while (match = linkRe.exec(copy)) { // eslint-disable-line
      matches.push(match);
    }
    return (<SummaryWrapper>{matches.reduce((elements, match) => {
      const index = elements.length - 1;
      const split = elements[index].split(match[0]);
      return [...elements.slice(0, index), split[0], (<Link href={match[2]}>{match[1]}</Link>), split[1]];
    }, [copy])}</SummaryWrapper>);
  } else {
    return (<SummaryWrapper>{copy}</SummaryWrapper>);
  }
};

export default Summary;