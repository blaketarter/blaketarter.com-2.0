import React from 'react';
import styled from 'styled-components';
import { navbarHeight, margin } from '../globals/sizes';
import { white } from '../globals/colors';

const NavbarWrapper = styled.nav`
  height: ${navbarHeight}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const LogoWrapper = styled.a`
  font-size: 35px;
  color: ${ white };
  margin-left: ${margin}px;
`;

const NavBarInnerWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 0 ${margin}px 0 0;
  padding: 0;
`;

const NavBarItemWrapper = styled.li`
  list-style: none;
  margin: 0 ${margin}px;
`;

const NavBarLinkWrapper = styled.a`
  text-decoration: none;
  color: ${ white };
`;

const Navbar = () => (
  <NavbarWrapper>
    <LogoWrapper>blaketarter</LogoWrapper>
    <NavBarInnerWrapper>
      <NavBarItemWrapper>
        <NavBarLinkWrapper href="#about-me">
          About Me
        </NavBarLinkWrapper>
      </NavBarItemWrapper>
      <NavBarItemWrapper>
        <NavBarLinkWrapper href="#my-work">
          My Work
        </NavBarLinkWrapper>
      </NavBarItemWrapper>
      <NavBarItemWrapper>
        <NavBarLinkWrapper href="#find-me">
          Find Me
        </NavBarLinkWrapper>
      </NavBarItemWrapper>
    </NavBarInnerWrapper>
  </NavbarWrapper>
);

export default Navbar;
