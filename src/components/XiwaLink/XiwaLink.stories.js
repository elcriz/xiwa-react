import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { XiwaLink } from './XiwaLink';

export default {
  title: 'Controls/XiwaLink',
  component: XiwaLink,
};

export const Basic = args => (
  <div style={{ color: 'rgb(100, 100, 100)' }}>
    This is <XiwaLink {...args}/> inside a body of text.
  </div>
);
Basic.args = {
  children: 'an example link'
};

export const Button = () => (
  <XiwaLink
    onClick={() => {
      console.log('I was clicked');
    }}
    type="button"
    isButton
  >
    An example button
  </XiwaLink>
);

export const Discrete = () => (
  <div style={{ color: 'rgb(100, 100, 100)' }}>
    This is <XiwaLink
      isDiscrete
    >
      an example discrete link
    </XiwaLink> inside a body of text.
  </div>
);

export const Alternative = () => (
  <div style={{ color: 'rgb(100, 100, 100)' }}>
    This is <XiwaLink
      isAlternative
    >
      an example alternative link
    </XiwaLink> inside a body of text.
  </div>
);

export const WithPointer = () => (
  <XiwaLink
    hasPointer
  >
    An example link with pointer
  </XiwaLink>
);

export const WithIcons = () => (
  <div style={{ color: 'rgb(100, 100, 100)' }}>
    <XiwaLink
      leftIcon="&#10041;"
    >
      An example link with left icon
    </XiwaLink>
    <br />
    <XiwaLink
      rightIcon="&#10041;"
    >
      An example link with right icon
    </XiwaLink>
  </div>
);
