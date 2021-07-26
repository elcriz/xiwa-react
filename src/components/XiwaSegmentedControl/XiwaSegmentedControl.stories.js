import React from 'react';
import { XiwaSegmentedControl } from './XiwaSegmentedControl';

export default {
  title: 'Controls/XiwaSegmentedControl',
  component: XiwaSegmentedControl,
};

export const Basic = args => (
  <XiwaSegmentedControl
    {...args}
    options={['Option A', 'Option B', 'Option C']}
    value="Option B"
  />
);
Basic.args = {
  id: 'example-segmented-control',
};

export const WithLabel = () => (
  <XiwaSegmentedControl
    id="example-01"
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value="Option B"
  />
);

export const Inline = () => (
  <XiwaSegmentedControl
    id="example-02"
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value="Option B"
    isInline
  />
);

export const Smaller = () => (
  <XiwaSegmentedControl
    id="example-03"
    options={['Option A', 'Option B', 'Option C']}
    value="Option B"
    isSmall
  />
);

export const WithMultipleValues = () => (
  <XiwaSegmentedControl
    id="example-04"
    label="This is a label"
    options={['Option A', 'Option B', 'Option C']}
    value={['Option B', 'Option C']}
  />
);
