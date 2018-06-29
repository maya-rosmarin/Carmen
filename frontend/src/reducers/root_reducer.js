import { combineReducers } from 'redux';
import placeholderReducer from './placeholder_reducer';
import entities from './entities_reducer';

export default combineReducers({
  placeholder: placeholderReducer,
  entities
});
