import React from 'react';
import { XiwaCollection } from './XiwaCollection';
import { XiwaAppCard } from '../XiwaAppCard/XiwaAppCard';
import exampleImageFile from '../../shared/assets/app-example-01.png';

export default {
  title: 'Layouts/XiwaCollection',
  component: XiwaCollection,
};

export const Basic = args => (
  <XiwaCollection {...args}>
    <XiwaAppCard
      heading="First of four items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Second of four items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Third of four items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Fourth of four items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </XiwaCollection>
);
Basic.args = {
  variant: 'oneHalf',
};

export const OneHalf = () => (
  <XiwaCollection variant="oneHalf">
    <XiwaAppCard
      heading="First of two items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Second of two items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </XiwaCollection>
);

export const OneThird = () => (
  <XiwaCollection variant="oneThird">
    <XiwaAppCard
      heading="First of three items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Second of three items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Third of three items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </XiwaCollection>
);

export const OneFourth = () => (
  <XiwaCollection variant="oneFourth">
    <XiwaAppCard
      heading="First of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Second of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Third of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Fourth of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Fifth of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Sixth of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Seventh of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Eighth of eight items"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </XiwaCollection>
);

export const LargeHorizontalGaps = () => (
  <XiwaCollection variant="oneHalf" isLarge>
    <XiwaAppCard
      heading="First of two items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
    <XiwaAppCard
      heading="Second of two items"
      information="AppCard used for example"
      ratingValue={3}
      iconImageUrl={exampleImageFile}
    />
  </XiwaCollection>
);
