# Xiwa Design System for React

The **Xiwa Design System for React** is a reusable React component library that helps <a href="https://www.thelearningnetwork.nl/" target="_blank">The Learing Network</a> (TLN) front-end development contributors build UIs faster. Its goal is to make building durable, accessible UIs more productive and satisfying. It alsho helps keep UIs consistent, and according to The Learning Network guidelines and conventions.

## About

It is built in Storybook and consists of the following sections:
### Styles

Information on how to make your React application look TLN compliant with guides for applying layout, typography, colour, images and more.

### Patterns

Patterns are TLN best practice design solutions for specific user-focused tasks and page or screen types. All of the patterns in this section are supported by written guidance and contain coded examples where possible and available. Patterns often use one or more components and explain how to adapt them to the pattern's context.

### Component library

Save time with our library full of reusable, accessible React components for buttons, cards, navigation, layout, forms and more. Individual components can be used in multiple different patterns and contexts.

## Get started

### Running the Storybook documentation

Run `npm run storybook` or `yarn storybook` from within this repository. Storybook will run on `http://localhost:6006/` by default.

### Installation

Xiwa Design System components are written in React. They are documented in Storybook.

### Add Xiwa Design System to your project

Run `npm install @tln/xiwa-react` or `yarn add @tln/xiwa-react`.

_**Please note:** this guide is currently a proof of concept. The package above isn't available yet. If you still want to use the Xiwa Design System for React already in your project, contact a The Learning Network (IT) operative._

### Use the components

Import the components you want to use in your project:

```jsx
import { XiwaButton } from '@tln/xiwa-react';
```

Then, you can use them like so:

```jsx
const Example = () => (
  <div>
    <XiwaButton variant="primary">
      Click Me!
    </XiwaButton>
  </div>
);
```

### Use the styles

More information on this topic will follow, soon.
