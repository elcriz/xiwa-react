import React from 'react';
import { XiwaContent } from './XiwaContent';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaContent',
  component: XiwaContent,
};

export const Basic = args => (
    <XiwaContent {...args}>
      <h1>h1 ・ Example heading</h1>
      <h2>h2 ・ Example heading</h2>
      <h3>h3 ・ Example heading</h3>
      <p>p ・Example paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
      <ul>
        <li>li ・ Example list item</li>
      </ul>
      <ol>
        <li>li ・ Example list item</li>
      </ol>
    </XiwaContent>
);

export const CenteredContent = () => (
  <XiwaContent hasCenteredContent>
    <h1>h1 ・ Example heading</h1>
    <h2>h2 ・ Example heading</h2>
    <h3>h3 ・ Example heading</h3>
    <p>p ・Example paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
    <ul>
      <li>li ・ Example list item</li>
    </ul>
    <ol>
      <li>li ・ Example list item</li>
    </ol>
  </XiwaContent>
);

export const CenteredLayout = () => (
  <XiwaContent
    style={{ maxWidth: '480px' }}
    isCentered
  >
    <h1>h1 ・ Example heading</h1>
    <h2>h2 ・ Example heading</h2>
    <h3>h3 ・ Example heading</h3>
    <p>p ・Example paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
    <ul>
      <li>li ・ Example list item</li>
    </ul>
    <ol>
      <li>li ・ Example list item</li>
    </ol>
  </XiwaContent>
);

export const Narrow = () => (
  <XiwaContent isNarrow>
    <h1>h1 ・ Example heading</h1>
    <h2>h2 ・ Example heading</h2>
    <h3>h3 ・ Example heading</h3>
    <p>p ・Example paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
    <ul>
      <li>li ・ Example list item</li>
    </ul>
    <ol>
      <li>li ・ Example list item</li>
    </ol>
  </XiwaContent>
);

export const Alternative = () => (
  <Container isAlternative>
    <XiwaContent isAlternative>
      <h1>h1 ・ Example heading</h1>
      <h2>h2 ・ Example heading</h2>
      <h3>h3 ・ Example heading</h3>
      <p>p ・Example paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur ligula eget diam aliquet, eu congue est eleifend. Ut tincidunt tincidunt est, in dictum justo molestie eu. Donec molestie consequat sapien in rutrum. Aenean ultricies ante mi, eu tristique eros rutrum eget. Vestibulum hendrerit quam nec sodales cursus. Morbi finibus eget mi vitae gravida.</p>
      <ul>
        <li>li ・ Example list item</li>
      </ul>
      <ol>
        <li>li ・ Example list item</li>
      </ol>
    </XiwaContent>
  </Container>
);
