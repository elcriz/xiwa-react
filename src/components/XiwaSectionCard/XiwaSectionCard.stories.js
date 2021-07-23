import React from 'react';
import { XiwaSectionCard } from './XiwaSectionCard';
import { Container } from '../../shared/components/Container';
import exampleImageFile from '../../shared/assets/section-example-01.png';

export default {
  title: 'Components/XiwaSectionCard',
  component: XiwaSectionCard,
};

export const Basic = args => (
  <Container>
    <XiwaSectionCard {...args}/>
  </Container>
);
Basic.args = {
  heading: 'A section card with just a heading',
  description: 'And a description text',
};

export const WithImage = () => (
  <Container>
    <XiwaSectionCard
      {...Basic.args}
      heading="A section card with an image"
      imageUrl={exampleImageFile}
    />
  </Container>
);
