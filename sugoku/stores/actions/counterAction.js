import { COUNTER__COUNT_DOWN, COUNTER__COUNT_RESET, COUNTER__COUNT_UP } from './counterType';

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
