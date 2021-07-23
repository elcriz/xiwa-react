import React from 'react';
import { XiwaArticleCard } from './XiwaArticleCard';
import { Container } from '../../shared/components/Container';
import exampleImageFile from '../../shared/assets/article-example-01.png';

export default {
  title: 'Components/XiwaArticleCard',
  component: XiwaArticleCard,
};

export const Basic = args => (
    <Container
      isNarrow
      isTransparent
    >
      <XiwaArticleCard {...args}/>
    </Container>
);
Basic.args = {
  heading: 'An example article with just a heading',
  description: 'This is the article\'s description, e.g. an excerpt of the full article.',
  imageUrl: exampleImageFile,
};

export const WithBorder = () => (
  <Container
    isNarrow
    isTransparent
  >
    <XiwaArticleCard
      {...Basic.args}
      heading="An example article with border"
      hasBorder
    />
  </Container>
);

export const Inverted = () => (
  <Container
    isNarrow
    isAlternative
  >
    <XiwaArticleCard
      {...Basic.args}
      heading="An example inverted article"
      description="As you can see, text color in this article is inverted (light on dark)."
      isInverted
    />
  </Container>
);

export const ShortenedDescription = () => (
  <Container
    isNarrow
    isTransparent
  >
    <XiwaArticleCard
      {...Basic.args}
      heading="An example article with shortened description"
      description="This example description text is actually much, much longer."
      hasShortenedDescription
    />
  </Container>
);

export const StretchBackground = () => (
  <XiwaArticleCard
    {...Basic.args}
    heading="An example article with stretched background image"
    description="As you may guess, it is recommended to set the isInverted prop to true for improved readability (light text over a darker background)"
    isInverted
    hasStretchBackground
  />
);
