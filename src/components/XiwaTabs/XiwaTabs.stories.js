import React from 'react';
import { XiwaTabs } from './XiwaTabs';
import { XiwaTabPanel } from './XiwaTabPanel';

export default {
  title: 'Components/XiwaTabs',
  component: XiwaTabs,
};

export const Basic = args => (
  <XiwaTabs {...args} />
);
Basic.args = {
  options: ['First tab', 'Second tab', 'Third tab'],
  children: [
    (
      <XiwaTabPanel>
        <div className="xiwa-content">
          This is the first of three tab panels.
        </div>
      </XiwaTabPanel>
    ),
    (
      <XiwaTabPanel>
        <div className="xiwa-content">
          This is the second of three tab panels.
        </div>
      </XiwaTabPanel>
    ),
    (
      <XiwaTabPanel>
        <div className="xiwa-content">
          This is the third of three tab panels.
        </div>
      </XiwaTabPanel>
    ),
  ]
};

export const WithDefaultValue = () => (
  <XiwaTabs
    options={['First tab', 'Second tab', 'Third tab']}
    value='Second tab'
  >
    <XiwaTabPanel>
      <div className="xiwa-content">
        This is the first of three tab panels.
      </div>
    </XiwaTabPanel>
    <XiwaTabPanel>
      <div className="xiwa-content">
        This is the second of three tab panels. In this example, it is selected and thus opened by default.
      </div>
    </XiwaTabPanel>
    <XiwaTabPanel>
      <div className="xiwa-content">
        This is the third of three tab panels.
      </div>
    </XiwaTabPanel>
  </XiwaTabs>
)
