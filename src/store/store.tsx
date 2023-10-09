import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import stepReducer from './stepSlice';
import mainScreenReducer from './mainScreenSlice';
import step1Reducer from './step1Slice';
import step2Reducer from './step2Slice';
import step3Reducer from './step3Slice';

const rootReducer = combineReducers({
  mainScreen: mainScreenReducer,
  stepReducer: stepReducer,
  step1: step1Reducer,
  step2: step2Reducer,
  step3: step3Reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
