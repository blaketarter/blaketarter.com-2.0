import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
// import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="container">
    <Navbar />
    <Hero />
    <AboutMe />
    <Works />
    {/* <Footer /> */}
  </div>
);

export default App;
