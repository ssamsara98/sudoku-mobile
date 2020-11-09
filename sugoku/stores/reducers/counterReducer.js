import {
  COUNTER__COUNT_DOWN,
  COUNTER__COUNT_RESET,
  COUNTER__COUNT_UP,
} from '../actions/counterType';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER__COUNT_UP:
      return state + 1;
    case COUNTER__COUNT_DOWN:
      return state - 1;
    case COUNTER__COUNT_RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
