import React from 'react';
import { XiwaDialog } from './XiwaDialog';

export default {
  title: 'Components/XiwaDialog',
  component: XiwaDialog,
};

export const Basic = args => <XiwaDialog {...args} />;
Basic.args = { children: 'This is a default dialog.' };

export const Variants = () => (
  <>
    <XiwaDialog>This is a default dialog</XiwaDialog>
    <XiwaDialog variant="success">This is a 'success' dialog. It automatically renders an appropriate icon, too.</XiwaDialog>
    <XiwaDialog variant="warning">This is a 'warning' dialog. It automatically renders an appropriate icon, too.</XiwaDialog>
    <XiwaDialog variant="error">This is an 'error' dialog. It automatically renders an appropriate icon, too.</XiwaDialog>
  </>
);
