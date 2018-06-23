import { combineReducers } from 'redux';
import placeholderReducer from './placeholder_reducer';

export default combineReducers({
  placeholder: placeholderReducer
})
