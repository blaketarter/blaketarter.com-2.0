import React from 'react';
import styled from 'styled-components';
import { navbarHeight, margin, smallUpQuery } from '../../globals/sizes';
import { white, black } from '../../globals/colors';
import NavBarLink from './NavBarLink';

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
  color: ${black};
  margin-left: ${margin}px;
`;

const NavBarInnerWrapper = styled.ul`
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 0 ${margin}px 0 0;
  padding: 0;
  display: none;

  ${smallUpQuery} {
    display: flex;
  }
`;

const NavBarItemWrapper = styled.li`
  list-style: none;
  margin: 0 ${margin}px;
`;

const Navbar = ({ navItems }) => (
  <NavbarWrapper id="top">
    <LogoWrapper>blaketarter</LogoWrapper>
    <NavBarInnerWrapper>
      {navItems.map((item, index) => (
        <NavBarItemWrapper key={index}>
          <NavBarLink href={item.href} text={item.text} />
        </NavBarItemWrapper>
      ))}
    </NavBarInnerWrapper>
  </NavbarWrapper>
);

export default Navbar;
