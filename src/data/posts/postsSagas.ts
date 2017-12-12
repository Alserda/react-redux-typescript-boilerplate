import { AxiosResponse } from 'axios';
import { call } from 'redux-saga/effects';

import { IPureAction, ActionType } from 'data/actions';
import PostsAPI from './PostsAPI';

export function* fetchPosts(action: IPureAction<ActionType.FETCH_POSTS_REQUESTED, undefined>): any {
  try {
    const response: AxiosResponse = yield call(PostsAPI.fetch);
    console.log('try: ', response.data);
  } catch (e) {
    console.log('Error: ', e);
  }
}