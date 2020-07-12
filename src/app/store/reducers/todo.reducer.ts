import { types } from '../actions/todo.actions';

const initialState = [
  'one',
  'two',
  'three'
];

export function todoReducer(state = initialState, { type, payload }){
  switch (type) {
    case types.ADD_TODO:
      state = [...state, payload];
      break;
    
    case types.REMOVE_TODO:
      // remove todo item
      break;
  }

  return state;
}