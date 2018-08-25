import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import sagas from 'data/sagas';
import { IAction } from 'data/actions';
import { IPostsState, postsReducer } from 'data/posts/postsReducer';

import { readableActionTypes } from 'services/redux/readableActionTypes';


export interface IRootState {
  posts: IPostsState;
}

const logger = createLogger({ actionTransformer: readableActionTypes });
const sagaMiddleware = createSagaMiddleware();

export const store: Store<IRootState> = createStore<IRootState, IAction<any>, any, any>(
  combineReducers({
    posts: postsReducer,
  }),
  applyMiddleware(
    thunk,
    sagaMiddleware,
    logger,
  )
);

sagaMiddleware.run(sagas);
