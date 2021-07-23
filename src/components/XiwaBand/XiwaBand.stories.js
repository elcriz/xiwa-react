import React from 'react';
import { XiwaBand } from './XiwaBand';
import { Container } from '../../shared/components/Container';

export default {
  title: 'Components/XiwaBand',
  component: XiwaBand,
};

export const Basic = args => (
  <Container>
    <XiwaBand {...args} />
  </Container>
);
Basic.args = {
  children: 'This is the content for this band.'
};

export const Larger = () => (
  <>
    <Container>
      <XiwaBand isLarge>
        This is the content for this <strong>large</strong> band.
      </XiwaBand>
      <hr />
      <XiwaBand isLargeAtTop>
        This is the content for this <strong>large at top</strong> band.
      </XiwaBand>
      <hr />
      <XiwaBand isLargeAtBottom>
        This is the content for this <strong>large at bottom</strong> band.
      </XiwaBand>
    </Container>
  </>
);

export const Alternative = () => (
  <>
    <Container>
      <XiwaBand isAlternative>
        This is the content for this <strong>alternative</strong> band.
      </XiwaBand>
    </Container>
  </>
);
