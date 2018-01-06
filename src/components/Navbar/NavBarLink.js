import React from 'react';
import styled from 'styled-components';
import { black } from '../../globals/colors';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const NavBarLinkWrapper = styled.a`
  text-decoration: none;
  color: ${black};
`;

const onClick = (e, href) => {
  const el = document.getElementById(href.slice(1));

  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });

    window.location.href = href;
  }
};

const NavbarLink = ({ href, text }) => (
  <NavBarLinkWrapper href={href} onClick={e => onClick(e, href)}>
    {text}
  </NavBarLinkWrapper>
);

export default NavbarLink;
