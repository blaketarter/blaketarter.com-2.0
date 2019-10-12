import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar';
import Hero from '../Hero';
import AboutMe from '../AboutMe';
import MyWork from '../MyWork';
import FindMe from '../FindMe';
import Footer from '../Footer';
import { fontFamily } from '../../globals/fonts';
import '../../vendor/normalize.css';
import db from '../../db.json';
import { darkModeQuery } from '../../globals/sizes';
import { darkBackground, white, black } from '../../globals/colors';

const Container = styled('div')`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: ${fontFamily};
  color: ${black};

  ${darkModeQuery} {
    background: ${darkBackground};
    color: ${white};
  }
`;

const App = () => (
  <Container>
    <Navbar { ...db.navBar } />
    <Hero { ...db.hero } />
    <AboutMe { ...db.aboutMe } />
    <MyWork { ...db.myWork } />
    <FindMe { ...db.findMe } />
    <Footer { ...db.footer } />
  </Container>
);

export default App;
