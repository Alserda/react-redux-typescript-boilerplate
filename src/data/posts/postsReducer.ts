import { IAction, ActionType } from 'data/actions';

export interface IPostsState {
  elements: string[];
}

const initialState: IPostsState = {
  elements: ['kaas']
};

const handlers: { [index: number]: any } = {

};

export function postsReducer(state: IPostsState = initialState, action: IAction<any>): IPostsState {
  if (handlers[action.type]) {
    return handlers[action.type](state, action.payload);
  }

  return state;
}