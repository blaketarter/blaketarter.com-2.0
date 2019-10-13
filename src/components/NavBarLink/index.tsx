import React, { MouseEvent } from 'react';
import styled from '@emotion/styled'
import { black, white } from '../../globals/colors';
import smoothscroll from 'smoothscroll-polyfill';
import { darkModeQuery } from '../../globals/sizes';

smoothscroll.polyfill();

interface Props {
  href: string;
  text: string;
}

export const NavBarLink = ({ href, text }: Props) => (
  <NavBarLinkWrapper href={href} onClick={e => onClick(e, href)}>
    {text}
  </NavBarLinkWrapper>
);

const onClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  const el = document.getElementById(href.slice(1));

  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });

    if (window.history.pushState) {
      window.history.pushState(null, href, href);
    } else {
      window.location.href = href;
    }
  }
};

const NavBarLinkWrapper = styled('a')`
  text-decoration: none;
  color: ${black};

  ${darkModeQuery} {
    color: ${white};
  }
`;
