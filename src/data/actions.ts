export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface IPureAction<T, P> {
  type: T;
  payload: P;
}

export enum ActionType {
  // Global
  ADD_CONNECTION,

  // Connection - Sequence
  UPDATE_SEQUENCE_STATUS,
  UPDATE_SEQUENCE_HISTORY,

  // Connection - Operations
  RECEIVED_NEW_OPERATIONS,
  EXECUTE_OPERATION,
  OPERATION_SUCCEEDED,
  OPERATION_FAILED,

  // Connection - connection
  UPDATE_CONNECTION_STATUS,
  UPDATE_CONNECTION_INFO,
}