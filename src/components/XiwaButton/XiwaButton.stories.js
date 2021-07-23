import React from 'react';
import { XiwaButton } from './XiwaButton';

export default {
  title: 'Controls/XiwaButton',
  component: XiwaButton,
};

export const Basic = args => <XiwaButton {...args} />;
Basic.args = { children: 'Label' };

export const Variants = () => (
  <>
    <XiwaButton>Basic</XiwaButton>
    <XiwaButton variant="primary">Primary</XiwaButton>
    <XiwaButton variant="secondary">Secondary</XiwaButton>
    <XiwaButton variant="tertiary">Tertiary</XiwaButton>
    <XiwaButton variant="error-confirmation">Error confirmation</XiwaButton>
    <XiwaButton isOutlined>Basic</XiwaButton>
    <XiwaButton variant="primary" isOutlined>Outlined primary</XiwaButton>
    <XiwaButton variant="secondary" isOutlined>Outlined secondary</XiwaButton>
    <XiwaButton variant="tertiary" isOutlined>Outlined tertiary</XiwaButton>
    <XiwaButton variant="error-confirmation" isOutlined>Outlined error confirmation</XiwaButton>
  </>
);

export const Sizes = () => (
  <>
    <XiwaButton size="80" variant="primary">Primary size 80</XiwaButton>
    <XiwaButton size="90" variant="primary">Primary size 90</XiwaButton>
    <XiwaButton size="100" variant="primary">Primary size 100 (default)</XiwaButton>
    <XiwaButton size="200" variant="primary">Primary size 200</XiwaButton>
    <XiwaButton size="300" variant="primary">Primary size 300</XiwaButton>
  </>
);

export const Disabled = () => (
  <>
    <XiwaButton variant="primary" isDisabled>Disabled primary</XiwaButton>
  </>
);

export const Loading = () => (
  <>
    <XiwaButton variant="primary" isLoading>Loading primary</XiwaButton>
  </>
);

export const Skeleton = () => (
  <>
    <XiwaButton variant="primary" isSkeleton>Skeleton primary</XiwaButton>
  </>
);

export const Subordinate = () => (
  <>
    <XiwaButton variant="primary" isSubordinate>Subordinate primary</XiwaButton>
  </>
);

export const WithIcons = () => (
  <>
    <XiwaButton variant="primary" leftIcon={(
      <span className="xiwa-button__icon">
        &#10041;
      </span>
    )}>Primary with left icon</XiwaButton>
    <XiwaButton variant="primary" rightIcon={(
      <span className="xiwa-button__icon">
        &#10041;
      </span>
    )}>Primary with right icon</XiwaButton>
  </>
);
