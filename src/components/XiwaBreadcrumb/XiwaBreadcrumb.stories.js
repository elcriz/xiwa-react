import React from 'react';
import { XiwaBreadcrumb } from './XiwaBreadcrumb';

export default {
  title: 'Components/XiwaBreadcrumb',
  component: XiwaBreadcrumb,
};

export const Basic = args => (
  <XiwaBreadcrumb {...args} />
);
Basic.args = {
  items: [
    { to: '#', label: 'First item' },
    { to: '#', label: 'Second item' },
    { to: '#', label: 'Third item' },
    { label: 'Final item' },
  ],
};
