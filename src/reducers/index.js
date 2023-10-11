const { FAIL_REQUEST,  SET_USER_LIST, MAKE_REQUEST } = require('../actions/index')

const initialState = {
  loading: false,
  error: null,
  userList: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_USER_LIST:
      return {
        ...state,
        loading: false,
        error: null,
        userList: action.payload,
      };
    default:
      return state;
  }
};

module.exports={Reducer};
