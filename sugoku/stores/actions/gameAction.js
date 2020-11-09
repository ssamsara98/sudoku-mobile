import sugokuApi from '../../apis/sugokuApi';
import { GAME__FETCH_BOARD, GAME__CLEAR } from './gameType';

export const fetchBoard = (difficulty) => {
  return async (dispatch) => {
    const result = await sugokuApi({
      url: '/board',
      method: 'GET',
      params: { difficulty },
    });

    dispatch({
      type: GAME__FETCH_BOARD,
      payload: { ...result.data, difficulty },
    });
  };
};

export const clearGame = () => {
  return {
    type: GAME__CLEAR,
  };
};
