import {
  COUNTER__CLEAR_INTERVAL,
  COUNTER__COUNT_DOWN,
  COUNTER__COUNT_RESET,
  COUNTER__COUNT_UP,
  COUNTER__SET_INTERVAL_DOWN,
  COUNTER__SET_INTERVAL_UP,
} from './counterType';

export const countUp = () => {
  return {
    type: COUNTER__COUNT_UP,
  };
};

export const countDown = () => {
  return {
    type: COUNTER__COUNT_DOWN,
  };
};

export const countReset = () => {
  return {
    type: COUNTER__COUNT_RESET,
  };
};

export const setCountIntervalUp = () => {
  return (dispatch) => {
    return {
      type: COUNTER__SET_INTERVAL_UP,
      dispatch,
    };
  };
};

export const setCountIntervalDown = () => {
  return (dispatch) => {
    return {
      type: COUNTER__SET_INTERVAL_DOWN,
      dispatch,
    };
  };
};

export const clearInterval = () => {
  return {
    type: COUNTER__CLEAR_INTERVAL,
  };
};
