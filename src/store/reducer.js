import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

//组合reducer
export default combineReducers({
  header : headerReducer 
})

