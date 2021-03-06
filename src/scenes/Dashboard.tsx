import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IRootState } from 'store';
import { fetchPosts as fetchPostsAction } from 'data/posts/postsActions';
import { RequestState } from 'services/networking/requests';
import { IPost } from 'data/posts/postsModels';
import { IAction } from 'data/actions';


interface IStateFromProps {
  fetchStatus: RequestState;
  posts: IPost[];
}

interface IDispatchToProps {
  fetchPosts(): void;
}

interface IProps extends IStateFromProps, IDispatchToProps { }

class Dashboard extends React.Component<IProps> {
  public componentWillMount(): void {
    this.props.fetchPosts();
  }

  private renderPosts(): JSX.Element[] {
    return this.props.posts.map((post) => (
      <li key={post.id}>
        <span><strong>{post.title}</strong>: {post.body}</span>
      </li>
    ));
  }

  public render(): JSX.Element {
    return (
      <div className='c-dashboard'>
        {this.props.posts.length ? <ul>{this.renderPosts()}</ul> : 'Dashboard'}
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState): IStateFromProps => ({
  fetchStatus: state.posts.status,
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => (
  bindActionCreators({ fetchPosts: fetchPostsAction }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
