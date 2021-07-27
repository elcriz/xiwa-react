import React from 'react';
import { XiwaHeader } from './XiwaHeader';

export default {
  title: 'Components/XiwaHeader',
  component: XiwaHeader,
};

export const Basic = args => (
  <XiwaHeader {...args}/>
);
Basic.args = {
  heading: 'Example heading'
};

export const WithSubHeading = () => (
  <XiwaHeader
    heading="Example heading"
    subHeading="Example sub heading"
  />
);

export const Smaller = () => (
  <XiwaHeader
    heading="Example heading"
    subHeading="Example sub heading"
    size={90}
  />
);

export const CenteredContent = () => (
  <XiwaHeader
    heading="Example heading"
    subHeading="Example sub heading"
    hasCenteredContent
  />
);
