import {
  LEADERBOARD__ADD_EASY,
  LEADERBOARD__ADD_HARD,
  LEADERBOARD__ADD_MEDIUM,
  LEADERBOARD__DELETE_EASY,
  LEADERBOARD__DELETE_HARD,
  LEADERBOARD__DELETE_MEDIUM,
  LEADERBOARD__SET_EASY,
  LEADERBOARD__SET_HARD,
  LEADERBOARD__SET_MEDIUM,
} from './leaderboardType';

export const setBoard = (difficulty, item) => {
  let type = '';
  if (difficulty === 'easy') {
    type = LEADERBOARD__SET_EASY;
  } else if (difficulty === 'medium') {
    type = LEADERBOARD__SET_MEDIUM;
  } else if (difficulty === 'hard') {
    type = LEADERBOARD__SET_HARD;
  }
  return (dispatch) => {
    dispatch({ type, item });
  };
};

export const pushBoard = (difficulty) => {
  let type = '';
  if (difficulty === 'easy') {
    type = LEADERBOARD__ADD_EASY;
  } else if (difficulty === 'medium') {
    type = LEADERBOARD__ADD_MEDIUM;
  } else if (difficulty === 'hard') {
    type = LEADERBOARD__ADD_HARD;
  }
  return (dispatch, getState) => {
    const state = getState();
    dispatch({ type, payload: { name: state.player.name, time: state.counter.count } });
  };
};

export const deleteBoard = (difficulty, id) => {
  let type = '';
  if (difficulty === 'easy') {
    type = LEADERBOARD__DELETE_EASY;
  } else if (difficulty === 'medium') {
    type = LEADERBOARD__DELETE_MEDIUM;
  } else if (difficulty === 'hard') {
    type = LEADERBOARD__DELETE_HARD;
  }
  return (dispatch) => {
    dispatch({ type, id });
  };
};
