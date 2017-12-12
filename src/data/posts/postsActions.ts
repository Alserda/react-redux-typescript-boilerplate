import { IPureAction, ActionType } from 'data/actions';
import { IPost } from './postsModels';

export const fetchPosts = (): IPureAction<ActionType.FETCH_POSTS_REQUESTED, undefined> => ({
  type: ActionType.FETCH_POSTS_REQUESTED,
  payload: undefined,
});

export const fetchPostsSuccess = (posts: IPost[]): IPureAction<ActionType.FETCH_POSTS_SUCCESS, IPost[]> => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: posts,
});
