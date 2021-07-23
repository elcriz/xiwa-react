import React from 'react';
import { XiwaPanel } from './XiwaPanel';
import { XiwaButton } from '../XiwaButton/XiwaButton';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaPanel',
  component: XiwaPanel,
};

export const Basic = args => (
  <Container>
    <XiwaPanel {...args} />
  </Container>
);
Basic.args = { children: 'This is a panel.' };

export const Variants = () => (
  <>
    <Container>
      <XiwaPanel
        children="This is an 'alternative' panel."
      />
    </Container>
  </>
);

export const WithHeading = () => (
  <>
    <Container>
      <XiwaPanel
        heading="Panel heading"
        children="This is a panel."
      />
    </Container>
  </>
);

export const WithSubHeading = () => (
  <>
    <Container>
      <XiwaPanel
        heading="Panel heading"
        subHeading="Panel sub heading"
        children="This is a panel. The sub heading is only rendered when the heading prop has a value, too."
      />
    </Container>
  </>
);

export const Centered = () => (
  <>
    <Container>
      <XiwaPanel
        heading="Panel heading"
        subHeading="Panel sub heading"
        children="This is a panel with centered heading (and sub heading). Note that the content (currently, this line of text) is not centered as the content could be anything (text, a child component etc.)."
        hasCenteredContent
      />
    </Container>
  </>
);

export const Elevated = () => (
  <>
    <Container>
      <XiwaPanel
        children="This is an 'elevated' panel. Notice the subtle box shadow."
        isElevated
      />
    </Container>
  </>
);

export const Loading = () => (
  <>
    <Container>
      <XiwaPanel
        children="This is a 'loading' panel."
        isLoading
      />
    </Container>
  </>
);

export const WithActions = () => (
  <>
    <Container>
      <XiwaPanel
        children="This is a panel with actions. In this example, the actions consist of two buttons, but any text or child component(s) can be used."
        actions={(
          <>
            <XiwaButton variant="primary">Label</XiwaButton>
            <XiwaButton variant="secondary">Label</XiwaButton>
          </>
        )}
      />
    </Container>
  </>
);

export const WithJustifiedActions = () => (
  <>
    <Container>
      <XiwaPanel
        children="This is a panel with justified actions."
        actions={(
          <>
            <XiwaButton variant="primary">Label</XiwaButton>
            <XiwaButton variant="secondary">Label</XiwaButton>
          </>
        )}
        hasJustifiedActions
      />
    </Container>
  </>
);
