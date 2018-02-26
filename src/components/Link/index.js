import styled from 'preact-emotion';
import {
  primary,
} from '../../globals/colors';
import { bodyCopy } from '../../globals/fonts';

const Link = styled('a')`
  text-decoration: none;
  color: ${primary};
  font-size: ${bodyCopy}px;
`;

export default Link;
