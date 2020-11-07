const { USER__SET_NAME, USER__CLEAR_NAME } = require('../actions/userType');

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
    case USER__SET_NAME:
      return setName(state, action);
    case USER__CLEAR_NAME:
      return clearName(state);
    default:
      return state;
  }
};

export default userReducer;
