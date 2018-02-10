import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';

import { IPureAction, ActionType } from 'data/actions';
import PostsAPI from './PostsAPI';
import * as postsActions from './postsActions';

export function* fetchPosts(action: IPureAction<ActionType.FETCH_POSTS_REQUESTED, undefined>): any {
  try {
    const response: AxiosResponse = yield call(PostsAPI.fetch);

    yield put(postsActions.fetchPostsSuccess(response.data));
  } catch (e) {
    console.log('Error while fetching posts: ', e);
  }
}