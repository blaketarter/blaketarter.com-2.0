import React, { MouseEvent } from 'react';
import styled from '@emotion/styled'
import smoothscroll from 'smoothscroll-polyfill';
import { margin, maxWidth, darkModeQuery } from '../../globals/sizes';
import { black, primary, white } from '../../globals/colors';

smoothscroll.polyfill();

interface Props {
  copyright: String;
}

export const Footer = ({ copyright }: Props) => (
  <FooterWrapper>
    <ToTop href="#top" onClick={backToTop}>
      ↑ Back to the Top.
    </ToTop>
    <Copyright>
      {copyright.replace(/(CURR_YEAR)/, `${new Date().getFullYear()}`)}
    </Copyright>
  </FooterWrapper>
);

const backToTop = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  if (window.history.pushState) {
    window.history.pushState(null, '#top', '#top');
  } else {
    window.location.href = '#top';
  }
  
};

const FooterWrapper = styled('section')`
  margin: 0 auto;
  padding: ${margin}px;
  max-width: ${maxWidth}px;
`;

const Copyright = styled('p')`
  margin: 0;
  padding: 0;
  color: ${black};

  ${darkModeQuery} {
    color: ${white};
  }
`;

const ToTop = styled('a')`
  display: inline-block;
  margin-bottom: ${margin}px;
  text-decoration: none;
  color: ${primary};
`;
