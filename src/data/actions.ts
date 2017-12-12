export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface IPureAction<T, P> {
  type: T;
  payload: P;
}

export enum ActionType {
  // Posts
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
}