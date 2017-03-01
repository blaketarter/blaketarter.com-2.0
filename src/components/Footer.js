import React from 'react';
import styled from 'styled-components';

import { margin, maxWidth } from '../globals/sizes';
import { black } from '../globals/colors';

const FooterWrapper = styled.section`
  margin: ${margin}px auto;
  padding: 0 ${ margin }px;
  max-width: ${ maxWidth }px;
`;

const Copyright = styled.p`
  margin: 0;
  padding: 0;
  color: ${black};
`;

const Footer = () => (
  <FooterWrapper>
    <Copyright>{`© ${ new Date().getFullYear() } Blake Tarter`}</Copyright>
  </FooterWrapper>
);

export default Footer;
