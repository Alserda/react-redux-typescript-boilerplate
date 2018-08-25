import createHistory from 'history/createBrowserHistory';

interface IRoutes {
  Root: string;
  Login: string;
}

export const routes: IRoutes = {
  Root: '/',
  Login: '/login',
};

export const history = createHistory();
