import AsyncStorage from '@react-native-community/async-storage';
import { v4 as uuidv4 } from 'uuid';
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
} from '../actions/leaderboardType';

const initialState = {
  easy: [],
  medium: [],
  hard: [],
};

function setEasy(state, item) {
  return { ...state, easy: item };
}
function setMedium(state, item) {
  return { ...state, medium: item };
}
function setHard(state, item) {
  return { ...state, hard: item };
}

function pushEasy(state, { name, time }) {
  const id = uuidv4();
  const arr = [...state.easy, { id, name, time }];
  arr.sort((a, b) => a.time - b.time);
  const newState = { ...state, easy: arr };
  AsyncStorage.setItem('easy', JSON.stringify(newState.easy));
  return newState;
}
function pushMedium(state, { name, time }) {
  const id = uuidv4();
  const arr = [...state.medium, { id, name, time }];
  arr.sort((a, b) => a.time - b.time);
  const newState = { ...state, medium: arr };
  AsyncStorage.setItem('medium', JSON.stringify(newState.medium));
  return newState;
}
function pushHard(state, { name, time }) {
  const id = uuidv4();
  const arr = [...state.hard, { id, name, time }];
  arr.sort((a, b) => a.time - b.time);
  const newState = { ...state, hard: arr };
  AsyncStorage.setItem('hard', JSON.stringify(newState.hard));
  return newState;
}

function deleteEasy(state, id) {
  const newArr = state.easy.filter((item) => item.id !== id);
  const newState = { ...state, easy: newArr };
  AsyncStorage.setItem('easy', JSON.stringify(newState.easy));
  return newState;
}
function deleteMedium(state, id) {
  const newArr = state.medium.filter((item) => item.id !== id);
  const newState = { ...state, medium: newArr };
  AsyncStorage.setItem('medium', JSON.stringify(newState.medium));
  return newState;
}
function deleteHard(state, id) {
  const newArr = state.hard.filter((item) => item.id !== id);
  const newState = { ...state, hard: newArr };
  AsyncStorage.setItem('hard', JSON.stringify(newState.hard));
  return newState;
}

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADERBOARD__SET_EASY:
      return setEasy(state, action.item);
    case LEADERBOARD__SET_MEDIUM:
      return setMedium(state, action.item);
    case LEADERBOARD__SET_HARD:
      return setHard(state, action.item);
    case LEADERBOARD__ADD_EASY:
      return pushEasy(state, action.payload);
    case LEADERBOARD__ADD_MEDIUM:
      return pushMedium(state, action.payload);
    case LEADERBOARD__ADD_HARD:
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
