import { IPureAction, ActionType } from 'data/actions';

export const fetchPosts = (): IPureAction<ActionType.FETCH_POSTS_REQUESTED, undefined> => ({
  type: ActionType.FETCH_POSTS_REQUESTED,
  payload: undefined,
});
