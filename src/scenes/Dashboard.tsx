import * as React from 'react';
import API from 'services/api/api';

export default class Monitor extends React.Component {
  public componentWillMount(): void {
    API.fetch('/posts').then((result) => console.log('Result: ', result));
  }

  public render(): JSX.Element {
    return (
      <div className='c-dashboard'>
        Dashboaaard
      </div>
    );
  }
}
