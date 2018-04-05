import { combineReducers } from 'redux';

import fabricCanvas from './fabricCanvas';
import activeObject from './activeObject';
import exportObject from './exportObject';
import fonts from './fonts';

const rootReducers = combineReducers({
  fabricCanvas,
  activeObject,
  exportObject,
  fonts,
});

export default rootReducers;
