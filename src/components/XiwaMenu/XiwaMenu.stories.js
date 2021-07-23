import React from 'react';
import { XiwaMenu } from './XiwaMenu';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaMenu',
  component: XiwaMenu,
};

export const Basic = args => (
    <XiwaMenu {...args} />
);
Basic.args = {
  heading: 'Example menu',
  items: [
    { to: '#', label: 'First menu item' },
    { to: '#', label: 'Second menu item' },
    { to: '#', label: 'Third menu item' },
    { to: '#', label: 'Fourth menu item' },
    { to: '#', label: 'Fifth menu item' },
    { to: '#', label: 'Sixth menu item' },
  ]
};
