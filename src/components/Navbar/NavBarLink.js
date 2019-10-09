import React from 'react';
import styled from 'preact-emotion';
import { black, white } from '../../globals/colors';
import smoothscroll from 'smoothscroll-polyfill';
import { darkModeQuery } from '../../globals/sizes';

smoothscroll.polyfill();

const NavBarLinkWrapper = styled('a')`
  text-decoration: none;
  color: ${black};

  ${darkModeQuery} {
    color: ${white};
  }
`;

const onClick = (e, href) => {
  const el = document.getElementById(href.slice(1));

  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });

    if (window.history.pushState) {
      window.history.pushState(null, null, href);
    } else {
      window.location.href = href;
    }
  }
};

const NavbarLink = ({ href, text }) => (
  <NavBarLinkWrapper href={href} onClick={e => onClick(e, href)}>
    {text}
  </NavBarLinkWrapper>
);

export default NavbarLink;
