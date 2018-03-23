import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RootApp from 'scenes/RootApp';
import { store } from './store';

/* DOM element to render the application within */
const target = document.getElementById('app');

/**
 * Renders the main application.
 *
 * @param Component Instance of the RootApp component
 */
const render = (Component: typeof RootApp): void => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    target
  );
};

/* Render the application for the first time */
render(RootApp);
