import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    panelPosition: 'right',
    theme: themes.light,
  },
});

function loadStories() {
  const context = require.context('../src', true, /__stories__\/.+\.jsx?$/);
  context.keys().forEach(context);
}

addDecorator(storyFn => <div style={{ textAlign: 'left' }}>{storyFn()}</div>);

configure(loadStories, module);
