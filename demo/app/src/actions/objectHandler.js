import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';

export const selected = createAction(types.OBJECT_SELECTED);
export const moving = createAction(types.OBJECT_MOVING);
export const modified = obj => {
  const { width, height, scaleX, scaleY } = obj;
  obj.setWidth(width * scaleX)
    .setHeight(height * scaleY)
    .setScaleX(1)
    .setScaleY(1);
  return { type: types.OBJECT_MODIFIED, payload: obj };
};
export const scaling = createAction(types.OBJECT_SCALING);
export const cleared = createAction(types.OBJECT_CLEARED);

