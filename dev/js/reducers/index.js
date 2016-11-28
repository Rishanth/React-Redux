import {combineReducers} from 'redux';
import UserReducer from './reducers-users';
import Activeuser from './reducer-active-user';
console.log('in reducer!!');
const allReducers = combineReducers({
  users: UserReducer,
  Activeuser:Activeuser
});
export default allReducers;
