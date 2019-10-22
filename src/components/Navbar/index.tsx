import React from "react"
import styled from "@emotion/styled"
import {
  navbarHeight,
  margin,
  smallUpQuery,
  maxWidth,
  darkModeQuery,
} from "../../utils/sizes"
import { NavBarLink } from "../NavBarLink"
import { white } from "../../utils/colors"

export const navItems = [
  {
    text: "About Me",
    href: "#about-me",
  },
  {
    text: "My Work",
    href: "#my-work",
  },
  {
    text: "Find Me",
    href: "#find-me",
  },
]

export const Navbar = () => (
  <NavbarWrapper id="top">
    <NavbarCenter>
      <LogoWrapper>blaketarter</LogoWrapper>
      <NavBarInnerWrapper>
        {navItems.map(item => (
          <NavBarItemWrapper key={item.href}>
            <NavBarLink href={item.href} text={item.text} />
          </NavBarItemWrapper>
        ))}
      </NavBarInnerWrapper>
    </NavbarCenter>
  </NavbarWrapper>
)

const NavbarWrapper = styled("nav")`
  height: ${navbarHeight};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`

const NavbarCenter = styled("div")`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${maxWidth}px;
`

const LogoWrapper = styled("a")`
  font-size: 35px;
  margin-left: ${margin}px;

  ${darkModeQuery} {
    color: ${white};
  }
`

const NavBarInnerWrapper = styled("ul")`
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 0 ${margin}px 0 0;
  padding: 0;
  display: none;

  ${smallUpQuery} {
    display: flex;
  }
`

const NavBarItemWrapper = styled("li")`
  list-style: none;
  margin: 0 ${margin}px;
`
