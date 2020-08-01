import { types } from '../actions/post.actions';

const initialState = [
  'Post #1',
  'Post #2',
  'Post #3'
];

export function postReducer(state = initialState, { type, payload }){
  switch (type) {
    case types.ADD_POST:
      state = [...state, payload];
      break;
    
    case types.REMOVE_POST:
      // remove todo item
      break;
  }

  return state;
}