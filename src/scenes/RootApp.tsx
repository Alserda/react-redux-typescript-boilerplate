import * as React from 'react';

import Dashboard from 'scenes/Dashboard';

import 'style/main';

export default class RootApp extends React.Component {
  public render(): JSX.Element {
    return (
      <Dashboard />
    );
  }
}
