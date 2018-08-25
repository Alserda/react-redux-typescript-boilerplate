import { ActionType, IAction } from 'data/actions';
import { takeEvery } from 'redux-saga/effects';

import * as postsSagas from './posts/postsSagas';

/**
 * redux-saga doesn't support enum values by default,
 * so we're changing it to a boolean instead.
 *
 * @param type ActionType to check for.
 */
const patternMap = (type: ActionType) => (action: IAction<any>): boolean => (
  action.type === type
);

function* mySaga(): any {
  yield takeEvery(patternMap(ActionType.FETCH_POSTS_REQUESTED), postsSagas.fetchPosts);
}

export default mySaga;
