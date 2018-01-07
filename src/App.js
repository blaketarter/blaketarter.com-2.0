import React from 'react';
import styled from 'preact-emotion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import FindMe from './components/FindMe';
import Footer from './components/Footer';
import { fontFamily } from './globals/fonts';
import './vendor/normalize.css';
import db from './db.json';

const Container = styled('div')`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: ${fontFamily};
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
