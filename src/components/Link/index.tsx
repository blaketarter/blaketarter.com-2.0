import styled from '@emotion/styled';
import { primary } from '../../globals/colors';
import { bodyCopy } from '../../globals/fonts';

export const Link = styled('a')`
  text-decoration: none;
  color: ${primary};
  font-size: ${bodyCopy}px;
`;
