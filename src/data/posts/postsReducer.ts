import { IAction, ActionType } from 'data/actions';
import { IPost } from './postsModels';
import { RequestState } from 'data/request/requestModels';
import * as postsMutators from './postsMutators';

export interface IPostsState {
  posts: IPost[];
  status: RequestState;
}

const initialState: IPostsState = {
  posts: [],
  status: RequestState.IDLE,
};

const handlers: { [index: number]: any } = {
  [ActionType.FETCH_POSTS_REQUESTED]: postsMutators.setPostsRequested,
  [ActionType.FETCH_POSTS_SUCCESS]: postsMutators.setPostsReceived,
};

export function postsReducer(state: IPostsState = initialState, action: IAction<any>): IPostsState {
  if (handlers[action.type]) {
    return handlers[action.type](state, action.payload);
  }

  return state;
}