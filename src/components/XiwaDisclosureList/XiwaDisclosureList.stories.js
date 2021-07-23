import React from 'react';
import { XiwaDisclosureList } from './XiwaDisclosureList';
import { XiwaDisclosureListItem } from './XiwaDisclosureListItem';
import { XiwaContent } from '../XiwaContent/XiwaContent';

export default {
  title: 'Components/XiwaDisclosureList',
  component: XiwaDisclosureList,
};

export const Basic = args => (
  <XiwaDisclosureList {...args} />
);
Basic.args = {
  children: [
    (
      <XiwaDisclosureListItem
        heading="Example question one of four"
      >
        <XiwaContent>
          <p>Example anwser one of four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
        </XiwaContent>
      </XiwaDisclosureListItem>
    ),
    (
      <XiwaDisclosureListItem
        heading="Example question two of four"
      >
        <XiwaContent>
          <p>Example anwser two of four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
        </XiwaContent>
      </XiwaDisclosureListItem>
    ),
    (
      <XiwaDisclosureListItem
        heading="Example question three of four"
      >
        <XiwaContent>
          <p>Example anwser three of four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
        </XiwaContent>
      </XiwaDisclosureListItem>
    ),
    (
      <XiwaDisclosureListItem
        heading="Example question four of four"
      >
        <XiwaContent>
          <p>Example anwser four of four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
        </XiwaContent>
      </XiwaDisclosureListItem>
    )
  ]
};
