import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ActionType } from 'data/actions';
import { IPostsState, postsReducer } from 'data/posts/postsReducer';

export interface IGlobalState {
  posts: IPostsState;
}

const actionTypeEnumToString = (action: any): any => typeof action.type === 'number' && ActionType[action.type] ? ({
  type: ActionType[action.type],
  payload: action.payload,
}) : action;

const composeEnhancers = composeWithDevTools({ actionSanitizer: actionTypeEnumToString });
export const store = createStore(
  combineReducers({
    posts: postsReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
    )
  )
);

export const GetState = (): IGlobalState => store.getState() as IGlobalState;

