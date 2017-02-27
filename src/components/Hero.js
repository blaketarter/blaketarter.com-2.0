import React from 'react';
import styled from 'styled-components';
import { heroHeight, margin } from '../globals/sizes';
import { primary, white } from '../globals/colors';
import { heroTitle, sectionTitle } from '../globals/fonts';

const HeroWrapper = styled.section`
  height: ${heroHeight}vh;
  position: relative;
  width: 100%;
  width: 100vw;
  overflow: hidden;
`;

const ClipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url('../images/wheat.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  clip-path: polygon(100% 0, 100% 0, 100% 93%, 0 100%, 0 0);

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3); 0%, rgba(0, 0, 0, 0.7); 100%);
  }
`;

const Center = styled.div`
  margin: 0 ${margin}px;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  color: ${ white };
  font-size: ${ heroTitle }px;
`;

const Subtitle = styled.p`
  color: ${ white };
  font-size: ${ sectionTitle }px;
`;

const Polygon = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${primary};
  transform: translateX(-5vw) rotate(1deg);
  transform-origin: bottom right;
`;

const Hero = () => (
  <HeroWrapper>
    <Polygon />
    <ClipWrapper>
      <Center>
        <Title>Hi, I'm Blake Tarter</Title>
        <Subtitle>A Kansas City based web developer</Subtitle>
      </Center>
    </ClipWrapper>
    {/*<div className="scroll-down-center">
      <div className="scroll"></div>
    </div>*/}
  </HeroWrapper>
);

export default Hero;
