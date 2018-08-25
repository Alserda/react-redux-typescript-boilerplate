import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Redux */
import { store } from './store';

/* Scenes */
import RootApp from 'scenes/RootApp';

/* DOM element to render the application within */
const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  target
);

