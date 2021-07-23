import React from 'react';
import { XiwaContainer } from './XiwaContainer';

export default {
  title: 'Components/XiwaContainer',
  component: XiwaContainer,
};

export const Basic = args => (
    <XiwaContainer {...args} />
);
Basic.args = {
  children: 'This is an example container.',
};

export const WithBorder = () => (
  <XiwaContainer hasBorder>
    This is an example container with border.
  </XiwaContainer>
);

export const WithTopMargin = () => (
  <XiwaContainer
    hasBorder
    hasTopMargin
  >
    This is an example container with border and increaded <strong>top</strong> margin.
  </XiwaContainer>
);

export const WithBottomMargin = () => (
  <XiwaContainer
    hasBorder
    hasBottomMargin
  >
    This is an example container with border and increaded <strong>bottom</strong> margin.
  </XiwaContainer>
);

export const Alternative = () => (
  <XiwaContainer isAlternative>
    This is an example <strong>alternative</strong> container.
  </XiwaContainer>
);
