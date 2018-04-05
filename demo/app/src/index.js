import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';
import configureStore from './store';

const store = configureStore({});

const rootElement = document.getElementById('app');

render(
  <Root store={store} />,
  rootElement
);
