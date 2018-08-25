import { IAction } from 'data/actions';
import { Reducer } from 'redux';

export default function createReducer<S>(initialState: S, handlers: { [index: number]: any }): Reducer<S> {
  return (state: S = initialState, action: IAction<any>): S => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action.payload);
    }

    return state;
  };
}
