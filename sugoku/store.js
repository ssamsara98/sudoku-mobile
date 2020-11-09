import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './stores/reducers/counterReducer';
import gameReducer from './stores/reducers/gameReducer';
import playerReducer from './stores/reducers/playerReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  game: gameReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
