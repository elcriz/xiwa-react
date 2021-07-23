import React from 'react';
import { XiwaBox } from './XiwaBox';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaBox',
  component: XiwaBox,
};

export const Basic = args => (
  <Container>
    <XiwaBox {...args} />
  </Container>
);
Basic.args = {
  children: 'This is the content for this box.'
};

export const WithBorder = () => (
  <>
    <Container>
      <XiwaBox hasBorder>
        This is the content for this box with a border.
      </XiwaBox>
    </Container>
  </>
);

export const WithPadding = () => (
  <>
    <Container>
      <XiwaBox
        hasBorder
        hasTopPadding
      >
        This is the content for this box with a border and with <strong>top</strong> padding.
      </XiwaBox>
      <XiwaBox
        hasBorder
        hasBottomPadding
      >
        This is the content for this box with a border and with <strong>bottom</strong> padding.
      </XiwaBox>
      <XiwaBox
        hasBorder
        hasLeftPadding
      >
        This is the content for this box with a border and with <strong>left</strong> padding.
      </XiwaBox>
      <XiwaBox
        hasBorder
        hasRightPadding
      >
        This is the content for this box with a border and with <strong>right</strong> padding.
      </XiwaBox>
      <XiwaBox
        hasBorder
        hasTopPadding
        hasBottomPadding
        hasLeftPadding
        hasRightPadding
      >
        This is the content for this box with a border and with padding on all sides.
      </XiwaBox>
    </Container>
  </>
);
