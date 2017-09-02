import React from 'react';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { margin, maxWidth } from '../../globals/sizes';
import { black, primary } from '../../globals/colors';

smoothscroll.polyfill();

const backToTop = e => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  window.location.href = '#top';
};

const FooterWrapper = styled.section`
  margin: ${margin}px auto;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
`;

const Copyright = styled.p`
  margin: 0;
  padding: 0;
  color: ${black};
`;

const ToTop = styled.a`
  display: inline-block;
  margin: ${margin}px 0;
  text-decoration: none;
  color: ${primary};
`;

const Footer = ({ copyright }) => (
  <FooterWrapper>
    <ToTop href="#top" onClick={backToTop}>
      ↑ Back to the Top.
    </ToTop>
    <Copyright>
      {copyright.replace(/(CURR_YEAR)/, new Date().getFullYear())}
    </Copyright>
  </FooterWrapper>
);

export default Footer;
