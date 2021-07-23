import React from 'react';
import { XiwaDropDownMenu } from './XiwaDropDownMenu';

export default {
  title: 'Controls/XiwaDropDownMenu',
  component: XiwaDropDownMenu,
};

export const Basic = args => <XiwaDropDownMenu {...args} />;
Basic.args = {
  options: [
    { key: 'Option A', value: 'A' },
    { key: 'Option B', value: 'B' },
    { key: 'Option C', value: 'C' },
  ],
};

export const Smaller = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      size={90}
    />
  </>
);

export const MaximumWidths = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      maxWidth={90}
    />
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      maxWidth={80}
    />
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      maxWidth={70}
    />
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      maxWidth={60}
    />
  </>
);

export const Disabled = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      isDisabled
    />
  </>
);

export const Valid = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      isValid
    />
  </>
);

export const Invalid = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      isValid={false}
    />
  </>
);

export const WithDefaultValue = () => (
  <>
    <XiwaDropDownMenu
      options={[
        { key: 'Option A', value: 'A' },
        { key: 'Option B', value: 'B' },
        { key: 'Option C', value: 'C' },
      ]}
      defaultValue="C"
    />
  </>
);
