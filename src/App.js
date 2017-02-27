import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Footer from './components/Footer';
import { fontFamily } from './globals/fonts';
import './vendor/normalize.css';

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: ${fontFamily};
`;

const App = () => (
  <Container>
    <Navbar />
    <Hero />
    <AboutMe />
    <Works />
    <Footer />
  </Container>
);

export default App;
