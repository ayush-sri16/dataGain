import { configureStore , combineReducers } from '@reduxjs/toolkit';
import tableReducer from '../features/tableSlice';
import calendarReducer from '../features/calendarSlice';

import { HYDRATE } from 'next-redux-wrapper';


const combineReducer = combineReducers({
    table :tableReducer,
    calendar: calendarReducer


})


const reducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return combineReducer(state, action);
    }
  };



export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
