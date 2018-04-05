import WebFont from 'webfontloader';
import * as types from '../constants/actionTypes';
import { googleCustomFonts } from '../constants/webfonts';

export const initialize = () => (dispatch) => {
  WebFont.load({
    custom: googleCustomFonts,
    timeout: 3000,
    fontactive: (fontFamily) => {
      dispatch({ type: types.FONTS_ACTIVE, payload: fontFamily });
    },
  });
  dispatch({ type: types.FONTS_INITIALIZE });
};
