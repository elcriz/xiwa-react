import React from 'react';
import { XiwaCard } from './XiwaCard';
import { Container } from '../../shared/components/Container';
import exampleImageFile from '../../shared/assets/article-example-01.png';
import exampleIconFile from '../../shared/assets/section-example-01.png';

export default {
  title: 'Components/XiwaCard',
  component: XiwaCard,
};

export const Basic = args => (
  <XiwaCard {...args}/>
);
Basic.args = {
  title: 'An example card with a title',
  subTitle: 'And a sub title',
  excerpt: 'And a short excerpt to tell the user a tad bit more.',
};

export const WithMedia = () => (
  <XiwaCard
    title="An example title"
    subTitle="An example sub title"
    excerpt="A short excerpt of the content behind this example card."
    mediaUrl={exampleImageFile}
    mediaAlt="A photo of the Dutch queen"
  />
);

export const WithIconImage = () => (
  <XiwaCard
    title="An example title"
    subTitle="An example sub title"
    excerpt="A short excerpt of the content behind this example card."
    iconUrl={exampleIconFile}
    mediaUrl={exampleImageFile}
    mediaAlt="A photo of the Dutch queen"
  />
);

export const Elevated = () => (
  <XiwaCard
    title="An example title"
    subTitle="An example sub title"
    excerpt="A short excerpt of the content behind this example card."
    mediaUrl={exampleImageFile}
    isElevated
  />
);

export const CenteredContent = () => (
  <XiwaCard
    title="An example title"
    subTitle="An example sub title"
    excerpt="A short excerpt of the content behind this example card."
    mediaUrl={exampleImageFile}
    hasContentCentered
  />
);

export const Smaller = () => (
  <XiwaCard
    title="An example title"
    subTitle="An example sub title"
    excerpt="A short excerpt of the content behind this example card."
    mediaUrl={exampleImageFile}
    size={90}
  />
);
