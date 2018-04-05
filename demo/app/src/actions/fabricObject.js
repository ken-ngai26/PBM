
import * as types from '../constants/actionTypes';

export const setLeft = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setLeft(parseInt(value, 10)).setCoords();
  dispatch({ type: types.OBJECT_SET_LEFT, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setTop = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setTop(parseInt(value, 10)).setCoords();
  dispatch({ type: types.OBJECT_SET_TOP, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setWidth = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setWidth(parseInt(value, 10)).setCoords();
  dispatch({ type: types.OBJECT_SET_WIDTH, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setHeight = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setHeight(parseInt(value, 10)).setCoords();
  dispatch({ type: types.OBJECT_SET_HEIGHT, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setFontFamily = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setFontFamily(value);
  dispatch({ type: types.OBJECT_SET_FONT_FAMILY, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};

export const setFontSize = value => (dispatch, getState) => {
  const activeObject = getState().fabricCanvas.getActiveObject();
  activeObject.setFontSize(value);
  dispatch({ type: types.OBJECT_SET_FONT_SIZE, payload: activeObject });
  dispatch({ type: types.CANVAS_REFRESH });
};
