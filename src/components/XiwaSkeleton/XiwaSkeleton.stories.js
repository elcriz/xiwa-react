import React from 'react';
import { XiwaSkeleton } from './XiwaSkeleton';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaSkeleton',
  component: XiwaSkeleton,
};

export const Basic = args => (
  <XiwaSkeleton {...args}/>
);

export const FullWidth = () => (
  <Container
    isTransparent
    isFullWidth
  >
    <XiwaSkeleton
      isFullWidth
    />
  </Container>
);

export const FullHeight = () => (
  <Container
    isTransparent
    height="150px"
  >
    <XiwaSkeleton
      isFullHeight
    />
  </Container>
);

export const Figure = () => (
  <Container
    isTransparent
    width="150px"
    height="150px"
  >
    <XiwaSkeleton
      variant="figure"
    />
  </Container>
);
