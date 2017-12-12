import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchPosts as fetchPostsAction } from 'data/posts/postsActions';
import API from 'services/api/api';
import { IRootState } from 'store';

interface IDispatchToProps {
  fetchPosts(): void;
}

interface IProps extends IDispatchToProps { }

class Dashboard extends React.Component<IProps> {
  public componentWillMount(): void {
    this.props.fetchPosts();
  }

  public render(): JSX.Element {
    console.log('props: ', this.props);
    return (
      <div className='c-dashboard'>
        Dashboaaard
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IRootState>): IDispatchToProps => (
  bindActionCreators({ fetchPosts: fetchPostsAction }, dispatch)
);

export default connect(undefined, mapDispatchToProps)(Dashboard);
