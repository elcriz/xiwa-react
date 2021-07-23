import React from 'react';
import { XiwaCopyButton } from './XiwaCopyButton';

export default {
  title: 'Controls/XiwaCopyButton',
  component: XiwaCopyButton,
};

export const Basic = args => <XiwaCopyButton {...args} />;
Basic.args = { content: 'Text to copy' };

export const WithCallback = () => (
  <>
    <XiwaCopyButton
    {...Basic.args}
      onDone={() => {
        console.log('Copied successfully!');
      }}
    />
  </>
);
