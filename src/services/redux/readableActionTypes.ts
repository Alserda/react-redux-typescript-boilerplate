import { ActionType, IAction } from 'data/actions';

export const readableActionTypes = (action: IAction<any>): any => typeof action.type === 'number' && ActionType[action.type] ? ({
  type: ActionType[action.type],
  payload: action.payload,
}) : action;
