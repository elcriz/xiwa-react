import React from 'react';
import { XiwaImage } from './XiwaImage';
import { Container } from '../../shared/components/Container';
import exampleImageFile from '../../shared/assets/article-example-01.png';

export default {
  title: 'Components/XiwaImage',
  component: XiwaImage,
};

export const Basic = args => (
    <XiwaImage {...args} />
);
Basic.args = {
  src: exampleImageFile,
  alt: 'A photo of the Dutch queen'
};

export const Round = () => (
  <Container
    width="240px"
    height="240px"
    hasNoPadding
    isTransparent
  >
    <XiwaImage
      src={exampleImageFile}
      alt="A photo of the Dutch queen"
      isRound
    />
  </Container>
);

export const Covering = () => (
  <Container
    width="100%"
    height="240px"
    hasNoPadding
  >
    <XiwaImage
      src={exampleImageFile}
      alt="A photo of the Dutch queen"
      isCovering
    />
  </Container>
);

export const HiddenOnHand = () => (
  <XiwaImage
    src={exampleImageFile}
    alt="A photo of the Dutch queen"
    isHiddenOnHand
  />
);
