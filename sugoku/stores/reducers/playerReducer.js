const { PLAYER__CLEAR_NAME, PLAYER__SET_NAME } = require('../actions/playerType');

const initialState = {
  name: '',
};

function setName(state, payload) {
  return { ...state, name: payload.name };
}

function clearName(state) {
  return { ...state, name: '' };
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER__SET_NAME:
      return setName(state, action.payload);
    case PLAYER__CLEAR_NAME:
      return clearName(state);
    default:
      return state;
  }
};

export default userReducer;
