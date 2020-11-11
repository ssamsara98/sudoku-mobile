import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './stores/reducers/counterReducer';
import gameReducer from './stores/reducers/gameReducer';
import leaderboardReducer from './stores/reducers/leaderboardReducer';
import playerReducer from './stores/reducers/playerReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  game: gameReducer,
  counter: counterReducer,
  leaderboard: leaderboardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
