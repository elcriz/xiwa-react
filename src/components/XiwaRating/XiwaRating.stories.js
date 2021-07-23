import React from 'react';
import { XiwaRating } from './XiwaRating';

export default {
  title: 'Components/XiwaRating',
  component: XiwaRating,
};

export const Basic = args => (
  <XiwaRating {...args}/>
);
Basic.args = {
  value: 3,
};

export const Score0 = () => (
  <XiwaRating />
);

export const Score1 = () => (
  <XiwaRating value={1}/>
);

export const Score2 = () => (
  <XiwaRating value={2}/>
);

export const Score3 = () => (
  <XiwaRating value={3}/>
);

export const Score4 = () => (
  <XiwaRating value={4}/>
);

export const Score5 = () => (
  <XiwaRating value={5}/>
);
