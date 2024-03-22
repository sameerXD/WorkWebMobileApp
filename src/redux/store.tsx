import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import employeeListReducer from './reducers/employeeListReducer';

const rootReducer = combineReducers({
  user: userReducer,
  employeeList: employeeListReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
