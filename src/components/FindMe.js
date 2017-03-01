import React from 'react';
import styled from 'styled-components';
import { margin, maxWidth } from '../globals/sizes';
import { black } from '../globals/colors';
import { sectionTitle, largeCopy, bodyLineHeight, bodyCopy } from '../globals/fonts';

const MoreAboutMeWrapper = styled.section`
  margin: ${3 * margin}px auto;
  padding: 0 ${ margin }px;
  max-width: ${ maxWidth }px;
`;

const Title = styled.h2`
  font-size: ${ sectionTitle }px;
  color: ${ black };
`;

const Label = styled.label`
  font-size: ${largeCopy}px;
  font-weight: 700;
  color: ${ black };
  display: block;
  margin: ${ margin }px 0;
`;

const Link = styled.a`
  font-size: ${ bodyCopy }px;
  font-weight: normal;
  color: ${ black };
  text-decordation: none;
  margin-left: ${ margin / 3 }px;
`;

const FindMe = () => (
  <MoreAboutMeWrapper id="find-me">
    <Title>Find Me on the Internet.</Title>
    <Label>Github <Link href="https://github.com/blaketarter">https://github.com/blaketarter</Link></Label>
    <Label>Codepen <Link href="https://codepen.io/blaketarter/">https://codepen.io/blaketarter/</Link></Label>
    <Label>NPM <Link href="https://www.npmjs.com/~blaketarter">https://www.npmjs.com/~blaketarter</Link></Label>
    <Label>Linkedin <Link href="https://www.linkedin.com/in/blaketarter">https://www.linkedin.com/in/blaketarter</Link></Label>
    <Label>Twitter <Link href="https://twitter.com/itsblaketarter">https://twitter.com/itsblaketarter</Link></Label>
    <Label>Medium <Link href="https://medium.com/@itsblaketarter">https://medium.com/@itsblaketarter</Link></Label>
  </MoreAboutMeWrapper>
);

export default FindMe;
