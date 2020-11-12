import {
  COUNTER__COUNT_DOWN,
  COUNTER__COUNT_RESET,
  COUNTER__COUNT_UP,
  COUNTER__SET_INTERVAL_UP,
  COUNTER__SET_INTERVAL_DOWN,
  COUNTER__CLEAR_INTERVAL,
} from '../actions/counterType';

const initialState = {
  count: 0,
  timer: null,
};

function countUp(state) {
  const count = state.count + 1;
  return { ...state, count };
}

function countDown(state) {
  const count = state.count - 1;
  return { ...state, count };
}

function setCountIntervalUp(state, dispatch) {
  const timer = setInterval(() => {
    dispatch({ type: COUNTER__COUNT_UP });
  }, 1000);
  return { ...state, timer };
}

function setCountIntervalDown(state, dispatch) {
  const timer = setInterval(() => {
    dispatch({ type: COUNTER__COUNT_DOWN });
  }, 1000);
  return { ...state, timer };
}

function clearCountInterval(state) {
  clearInterval(state.timer);
  return { ...state, timer: null };
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER__COUNT_UP:
      return countUp(state);
    case COUNTER__COUNT_DOWN:
      return countDown(state);
    case COUNTER__COUNT_RESET:
      return initialState;
    case COUNTER__SET_INTERVAL_UP:
      return setCountIntervalUp(state, action.dispatch);
    case COUNTER__SET_INTERVAL_DOWN:
      return setCountIntervalDown(state, action.dispatch);
    case COUNTER__CLEAR_INTERVAL:
      return clearCountInterval(state);
    default:
      return state;
  }
};

export default counterReducer;
