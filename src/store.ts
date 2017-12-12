import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import sagas from 'data/sagas';
import { ActionType } from 'data/actions';
import { IPostsState, postsReducer } from 'data/posts/postsReducer';

export interface IRootState {
  posts: IPostsState;
}

console.log(sagas);

const actionTypeEnumToString = (action: any): any => typeof action.type === 'number' && ActionType[action.type] ? ({
  type: ActionType[action.type],
  payload: action.payload,
}) : action;

const composeEnhancers = composeWithDevTools({ actionSanitizer: actionTypeEnumToString });
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducers({
    posts: postsReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
      sagaMiddleware,
    )
  )
);

sagaMiddleware.run(sagas);

export const GetState = (): IRootState => store.getState() as IRootState;

