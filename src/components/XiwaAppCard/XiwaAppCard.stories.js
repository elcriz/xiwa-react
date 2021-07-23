import React from 'react';
import { XiwaAppCard } from './XiwaAppCard';
import { Container } from '../../shared/components/Container';
import exampleImageFile from '../../shared/assets/app-example-01.png';

export default {
  title: 'Components/XiwaAppCard',
  component: XiwaAppCard,
};

export const Basic = args => (
  <Container>
    <XiwaAppCard {...args}/>
  </Container>
);
Basic.args = {
  heading: 'An app with just a heading'
};

export const WithInformation = () => (
  <Container>
    <XiwaAppCard
      heading="An app with an icon"
      information="Some app publisher"
    />
  </Container>
);

export const WithRating = () => (
  <Container>
    <XiwaAppCard
      heading="An app with an icon"
      information="Some app publisher"
      ratingValue={3}
    />
  </Container>
);

export const WithIcon = () => (
  <Container>
    <XiwaAppCard
      heading="An app with an icon"
      information="Some app publisher"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </Container>
);
