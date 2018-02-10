import { IPureAction, ActionType, IAction } from 'data/actions';
import { takeEvery } from 'redux-saga/effects';
import * as postsSagas from './posts/postsSagas';

/**
 * takeEvery by redux-saga does not allow enum types. This function
 * takes a dispatched action and checks if its action type is similar
 * to the one provided. If it is, the saga continues.
 * 
 *
 * @param {ActionType} type  Enum ActionType to react to.
 */
const patternMap = (type: ActionType) => (action: IAction<any>): boolean => (
  action.type === type
);

function* mySaga(): any {
  yield takeEvery(patternMap(ActionType.FETCH_POSTS_REQUESTED), postsSagas.fetchPosts);
}

export default mySaga;
