import { IPureAction, ActionType } from 'data/actions';
import { call, takeEvery } from 'redux-saga/effects';
import API from 'services/api/api';

function* fetchPostsSaga(action: IPureAction<ActionType.FETCH_POSTS_REQUESTED, undefined>): any {
  try {
    const fn = () => API.fetch('/posts');
    const data: any = yield call(fn);
    console.log('try: ', data); 
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* mySaga(): any {
  yield takeEvery(ActionType.FETCH_POSTS_REQUESTED, fetchPostsSaga);
}

export default mySaga;
