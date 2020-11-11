import { v4 as uuidv4 } from 'uuid';
import {
  LEADERBOARD__DELETE_EASY,
  LEADERBOARD__DELETE_HARD,
  LEADERBOARD__DELETE_MEDIUM,
  LEADERBOARD__PUSH_EASY,
  LEADERBOARD__PUSH_HARD,
  LEADERBOARD__PUSH_MEDIUM,
} from '../actions/leaderboardType';

const initialState = {
  easy: [],
  medium: [],
  hard: [],
};

function pushEasy(state, { name, time }) {
  const id = uuidv4();
  return { ...state, easy: [...state.easy, { id, name, time }] };
}
function pushMedium(state, { name, time }) {
  const id = uuidv4();
  return { ...state, medium: [...state.medium, { id, name, time }] };
}
function pushHard(state, { name, time }) {
  const id = uuidv4();
  return { ...state, hard: [...state.hard, { id, name, time }] };
}

function deleteEasy(state, id) {
  const newArr = state.easy.filter((item) => item.id !== id);
  return { ...state, easy: newArr };
}
function deleteMedium(state, id) {
  const newArr = state.medium.filter((item) => item.id !== id);
  return { ...state, medium: newArr };
}
function deleteHard(state, id) {
  const newArr = state.hard.filter((item) => item.id !== id);
  return { ...state, hard: newArr };
}

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADERBOARD__PUSH_EASY:
      return pushEasy(state, action.payload);
    case LEADERBOARD__PUSH_MEDIUM:
      return pushMedium(state, action.payload);
    case LEADERBOARD__PUSH_HARD:
      return pushHard(state, action.payload);
    case LEADERBOARD__DELETE_EASY:
      return deleteEasy(state, action.id);
    case LEADERBOARD__DELETE_MEDIUM:
      return deleteMedium(state, action.id);
    case LEADERBOARD__DELETE_HARD:
      return deleteHard(state, action.id);
    default:
      return state;
  }
};

export default leaderboardReducer;
