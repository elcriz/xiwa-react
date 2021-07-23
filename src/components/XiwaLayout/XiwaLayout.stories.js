import React from 'react';
import { XiwaLayout } from './XiwaLayout';
import { XiwaLayoutColumn } from './XiwaLayoutColumn';
import { XiwaBox } from '../XiwaBox/XiwaBox';

export default {
  title: 'Layouts/XiwaLayout',
  component: XiwaLayout,
};

export const Basic = args => (
  <XiwaLayout {...args}>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>First of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Second of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Third of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Fourth of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const LargeHorizontalGaps = () => (
  <XiwaLayout isLarge>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>First of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Second of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Third of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneFourth">
      <XiwaBox hasBorder>Fourth of four columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);
