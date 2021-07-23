import React from 'react';
import { XiwaLayout } from './XiwaLayout';
import { XiwaLayoutColumn } from './XiwaLayoutColumn';
import { XiwaBox } from '../XiwaBox/XiwaBox';

export default {
  title: 'Layouts/XiwaLayoutColumn',
  component: XiwaLayoutColumn,
};

export const SingleColumn = () => (
  <XiwaLayout>
    <XiwaLayoutColumn>
      <XiwaBox hasBorder>Just one column in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const OneHalfColumns = () => (
  <XiwaLayout>
    <XiwaLayoutColumn size="oneHalf">
      <XiwaBox hasBorder>First of two columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneHalf">
      <XiwaBox hasBorder>Second of two columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const OneThirdColumns = () => (
  <XiwaLayout>
    <XiwaLayoutColumn size="oneThird">
      <XiwaBox hasBorder>First of three columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneThird">
      <XiwaBox hasBorder>Second of three columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneThird">
      <XiwaBox hasBorder>Third of three columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const TwoThirdsColumn = () => (
  <XiwaLayout>
    <XiwaLayoutColumn size="twoThirds">
      <XiwaBox hasBorder>First of two columns in this example layout. This one is slightly wider (2/3 width) than its neighbour (1/3 width).</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn size="oneThird">
      <XiwaBox hasBorder>Second of two columns in this example layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const OneFourthColumns = () => (
  <XiwaLayout>
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

export const OrderVariants = () => (
  <XiwaLayout>
    <XiwaLayoutColumn
      size="oneHalf"
      variant="secondary"
    >
      <XiwaBox hasBorder>This column has the <strong>secondary</strong> variant. In HTML, it comes first in order, before the other column. However, it is rendered as the secondary column in terms of visual importance (to the right on larger devices). Click 'show code' below to see this in action.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn
      size="oneHalf"
      variant="primary"
    >
      <XiwaBox hasBorder>This column has the <strong>primary</strong> variant. In HTML, it comes second in order, before the other column. However, it is rendered as the primary column in terms of visual importance (to the left on larger devices). Click 'show code' below to see this in action.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const VerticalAlignment = () => (
  <XiwaLayout>
    <XiwaLayoutColumn
      size="oneThird"
      verticalAlignment="bottom"
    >
      <XiwaBox hasBorder>First of three columns in this example layout. It is aligned to the bottom of the layout.</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn
      size="oneThird"
    >
      <XiwaBox hasBorder>Second of three columns in this example layout. The example text in this column is longer than in the other column, to help demonstrate vertical alignment (in the other columns).</XiwaBox>
    </XiwaLayoutColumn>
    <XiwaLayoutColumn
      size="oneThird"
      verticalAlignment="middle"
    >
      <XiwaBox hasBorder>Third of three columns in this example layout. It is aligned to the middle of the layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);

export const BottomPadding = () => (
  <XiwaLayout>
    <XiwaLayoutColumn
      hasBottomPadding
    >
      <XiwaBox hasBorder>Just a single column in this example layout. It has more padding at its bottom in relation to the layout.</XiwaBox>
    </XiwaLayoutColumn>
  </XiwaLayout>
);
