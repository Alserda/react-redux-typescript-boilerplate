import { IPostsState } from './postsReducer';
import { RequestState } from 'data/request/requestModels';
import { IPost } from 'data/posts/postsModels';

export const setPostsRequested = (state: IPostsState): IPostsState => ({
  ...state,
  status: RequestState.REQUESTED,
});

export const setPostsReceived = (state: IPostsState, posts: IPost[]): IPostsState => ({
  ...state,
  status: RequestState.SUCCESS,
  posts,
});
