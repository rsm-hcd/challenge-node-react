import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import student from './student';

export default combineReducers({
  messages,
  auth,
  student
});
