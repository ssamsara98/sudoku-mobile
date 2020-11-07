import { USER__CLEAR_NAME, USER__SET_NAME } from './userType';

export const setName = (name) => {
  return {
    type: USER__SET_NAME,
    payload: { name },
  };
};

export const clearName = () => {
  return {
    type: USER__CLEAR_NAME,
  };
};
