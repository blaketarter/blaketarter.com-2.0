import React from 'react';
import styled, { keyframes } from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import {
  heroHeight,
  margin,
  maxWidth,
  smallUpQuery,
  mobileSizeMod,
} from '../../globals/sizes';
import { primary, black, primaryDark } from '../../globals/colors';
import { heroTitle, sectionTitle } from '../../globals/fonts';
import Gems from '../Gems';

smoothscroll.polyfill();

const HeroWrapper = styled.section`
  height: ${heroHeight}vh;
  position: relative;
  width: 100%;
  width: 100vw;
  overflow: hidden;
`;

const ClipWrapper = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f7c284;
  position: relative;
  clip-path: polygon(100% 0, 100% 0, 100% 93%, 0 100%, 0 0);
  -webkit-clip-path: polygon(100% 0, 100% 0, 100% 93%, 0 100%, 0 0);
`;

const Center = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
`;

const Title = styled.h1`
  color: ${black};
  font-size: ${heroTitle * mobileSizeMod}px;

  ${smallUpQuery} {
    font-size: ${heroTitle}px;
  }
`;

const Subtitle = styled.p`
  color: ${black};
  font-size: ${sectionTitle * mobileSizeMod}px;

  ${smallUpQuery} {
    font-size: ${sectionTitle}px;
  }
`;

const Polygon = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${primary};
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(1deg);
  transform-origin: bottom right;
`;

const ScrollDownCenter = styled.div`
  position: absolute;
  bottom: 7vh;
  width: 100%;
`;

const ScrollAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

const ScrollDownIcon = styled.div`
  background-image: url('${process.env.PUBLIC_URL}/images/mouse-black.png');
  background-position: 0;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
  margin: 0 auto;
  width: 25px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '•';
    color: ${black};
    text-align: center;
    width: 100%;
    display: block;
    animation: ${ScrollAnimation} 3s infinite;
    position: relative;
    top: 30px;
    will-change: transform, opacity;
  }
`;

const scrollDown = e => {
  e.preventDefault();
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const Hero = ({ title, subtitle }) => (
  <HeroWrapper>
    <Polygon />
    <ClipWrapper>
      <Gems />
      <Center>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Center>
    </ClipWrapper>
    <ScrollDownCenter>
      <ScrollDownIcon onClick={scrollDown} />
    </ScrollDownCenter>
  </HeroWrapper>
);

export default Hero;
