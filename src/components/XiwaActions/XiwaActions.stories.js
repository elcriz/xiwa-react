import React from 'react';
import { XiwaActions } from './XiwaActions';
import { XiwaButton } from '../XiwaButton/XiwaButton';
import { XiwaLink } from '../XiwaLink/XiwaLink';

export default {
  title: 'Components/XiwaActions',
  component: XiwaActions,
};

export const Basic = args => (
  <XiwaActions {...args}/>
);
Basic.args = {
  children: [
    (
      <XiwaButton
        key={0}
        variant="primary"
        size="200"
      >
        Primary Call To Action
      </XiwaButton>
    ),
    (
      <XiwaLink
        key={1}
        isAlternative
      >
        Secondary Call To Action
      </XiwaLink>
    ),
  ],
};

export const Centered = () => (
  <XiwaActions isCentered>
    <XiwaButton
      variant="primary"
      size="200"
    >
      Primary Call To Action
    </XiwaButton>
    <XiwaLink isAlternative>
      Secondary Call To Action
    </XiwaLink>
  </XiwaActions>
);

export const AlignedToTheRight = () => (
  <XiwaActions isAlignedToTheRight>
    <XiwaButton
      variant="primary"
      size="200"
    >
      Primary Call To Action
    </XiwaButton>
    <XiwaLink isAlternative>
      Secondary Call To Action
    </XiwaLink>
  </XiwaActions>
);
