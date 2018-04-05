import * as types from '../constants/actionTypes';

export const initialize = (el, height, width) => (dispatch, getState) => {
  const fabricCanvas = getState().fabricCanvas;
  fabricCanvas.initialize(el, { height, width });
  dispatch({ type: types.CANVAS_INITIALIZE, payload: fabricCanvas });
};
export const refresh = ({ type: types.CANVAS_REFRESH });
export const modified = event => ({ type: types.OBJECT_MODIFIED, payload: event.target });
export const addObject = obj => (dispatch, getState) => {
  const fabricCanvas = getState().fabricCanvas;
  fabricCanvas.add(obj);
  fabricCanvas.setActiveObject(obj);
  dispatch({ type: types.ADD_OBJECT, payload: fabricCanvas });
  dispatch({ type: types.OBJECT_SELECTED, payload: obj });
};

export const toDataURL = () => (dispatch, getState) => {
  const fabricCanvas = getState().fabricCanvas;
  const dataURL = fabricCanvas.toDataURL({
    format: 'jpeg',
    quality: 0.8,
  });
  dispatch({ type: types.TO_DATA_URL, payload: dataURL });
};

