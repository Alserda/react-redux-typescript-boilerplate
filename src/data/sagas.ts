import { IPureAction, ActionType, IAction } from 'data/actions';
import { takeEvery } from 'redux-saga/effects';
import * as postsSagas from './posts/postsSagas';

const patternMap = (type: ActionType) => (action: IAction<any>): boolean => (
  action.type === ActionType.FETCH_POSTS_REQUESTED
);

function* mySaga(): any {
  yield takeEvery(patternMap(ActionType.FETCH_POSTS_REQUESTED), postsSagas.fetchPosts);
}

export default mySaga;
