import * as React from 'react';
import { hot } from 'react-hot-loader';

import Dashboard from 'scenes/Dashboard';

class RootApp extends React.Component {
  public render(): JSX.Element {
    return (
      <Dashboard />
    );
  }
}

export default hot(module)(RootApp);
