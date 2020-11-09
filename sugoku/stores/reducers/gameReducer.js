import { GAME__CLEAR, GAME__FETCH_BOARD } from '../actions/gameType';

const initialState = {
  board: [[]],
  difficulty: 'easy',
  status: 'unsolved',
};

const fetchBoard = (state, sudoku) => {
  return { ...state, board: sudoku.board, difficulty: sudoku.difficulty };
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME__FETCH_BOARD:
      return fetchBoard(state, action.payload);
    case GAME__CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
