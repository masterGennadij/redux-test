import * as appTypes from '../types/appTypes';

export const actionFirst = (payload) => ({
  type: appTypes.ACTION_FIRST,
  payload:'First action has been dispatched',
});

export const actionSecond = (payload) => ({
  type: appTypes.ACTION_SECOND,
  payload:'Second action has been dispatched',
});

