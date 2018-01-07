import React from 'react';
import styled from 'preact-emotion';
import { margin, maxWidth, mediumUpQuery } from '../../globals/sizes';
import { black } from '../../globals/colors';
import { sectionTitle, largeCopy, bodyCopy } from '../../globals/fonts';

const MoreAboutMeWrapper = styled('footer')`
  margin: ${3 * margin}px auto;
  padding: 0 ${ margin }px;
  max-width: ${ maxWidth }px;
`;

const Title = styled('h2')`
  font-size: ${ sectionTitle }px;
  color: ${ black };
`;

const Label = styled('label')`
  font-size: ${largeCopy}px;
  font-weight: 700;
  color: ${ black };
  display: block;
  margin: ${ margin }px 0;
`;

const Link = styled('a')`
  font-size: ${ bodyCopy }px;
  font-weight: normal;
  color: ${ black };
  display: block;
  width: 100%;
  word-break: break-all;

  ${ mediumUpQuery } {
    margin-left: ${ margin / 3 }px;
    display: initial;
  }
`;

const FindMe = ({
  title,
  links,
}) => (
  <MoreAboutMeWrapper id="find-me">
    <Title>{title}</Title>
    {links.map((linkData, index) =>
      <Label key={index}>{linkData.label} <Link
        href={linkData.link}>{linkData.linkText ? linkData.linkText : linkData.link}</Link>
      </Label>
    )}
  </MoreAboutMeWrapper>
);

export default FindMe;
