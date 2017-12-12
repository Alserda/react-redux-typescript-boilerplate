import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IGlobalState, globalReducer } from 'data/global/globalReducer';

export interface IGlobalState {
  global: IGlobalState;
}

export const store = createStore(
  combineReducers({
    global: globalReducer,
  }),
  applyMiddleware(
    thunk,
  )
);

export const GetState = (): IGlobalState => store.getState() as IGlobalState;

