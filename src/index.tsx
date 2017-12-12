import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

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
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    target,
  );
};

/* Enable hot module replacement for components */
if (module.hot) {
  module.hot.accept('scenes/RootApp', () => {
    const NextRootApp: typeof RootApp = require('scenes/RootApp').default;
    render(RootApp);
  });
}

/* Render the application for the first time */
render(RootApp);
