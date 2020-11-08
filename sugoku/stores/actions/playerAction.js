import { PLAYER__CLEAR_NAME, PLAYER__SET_NAME } from './playerType';

export const setName = (name) => {
  return {
    type: PLAYER__SET_NAME,
    payload: { name },
  };
};

export const clearName = () => {
  return {
    type: PLAYER__CLEAR_NAME,
  };
};
