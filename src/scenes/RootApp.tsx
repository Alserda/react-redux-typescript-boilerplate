import * as React from 'react';
import { hot } from 'react-hot-loader';

/* Routing */
import { Route, Router } from 'react-router-dom';
import { routes, history } from 'services/routing';

/* Scenes */
import Dashboard from 'scenes/Dashboard';


const RootApp: React.SFC = () => (
  <Router history={history}>
    <div className='o-app-wrapper js-modal-container'>
      <main className='c-main'>
        <Route exact path={routes.Root} component={Dashboard} />
      </main>
    </div>
  </Router>
);

export default hot(module)(RootApp);
