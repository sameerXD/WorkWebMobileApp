import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './actions/getUserLoggedIn';

const rootReducer = combineReducers({
  user: userReducer,
});
const store = configureStore({
  reducer: rootReducer
});

export default store;
