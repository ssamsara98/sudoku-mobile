import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import playerReducer from './stores/reducers/playerReducer';

const rootReducer = combineReducers({
  player: playerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
