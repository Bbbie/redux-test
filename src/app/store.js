// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
const initialState = {
  items: ["a"],
  counter: 0
}

const actionTypes = { ADD: 'add', COUNTUP: 'count up' };

export const addItem = (value) => {
  return { type: actionTypes.ADD, value: value }
};

export const store = createStore((state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {...state, items: state.items.concat(action.value)};
    case actionTypes.COUNTUP:
      return {...state, counter: action.counter};
    default:
      return state;
  }

  // if (action.type == 'add') {
  //   return {...state, items: state.items.concat(action.value)};
  // }
  // if (action.type == 'count up') {
  //   return {...state, counter: action.counter};
  // }
  // return state;
}, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());