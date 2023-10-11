const MAKE_REQUEST = "MAKE_REQUEST";
const FAIL_REQUEST = "FAIL_REQUEST";
const GET_USER_LIST = "GET_USER_LIST";
const SET_USER_LIST = "SET_USER_LIST";

const makeRequest = () => ({
  type: MAKE_REQUEST,
});
const failRequest = (error) => ({
  type: FAIL_REQUEST,
  payload: error,
});
const getUserList = (value) => ({
  type: GET_USER_LIST,
  payload: value,
});
const setUserList = (value) => ({
  type: SET_USER_LIST,
  payload: value,
});

module.exports = {
  MAKE_REQUEST,
  FAIL_REQUEST,
  GET_USER_LIST,
  SET_USER_LIST,
  makeRequest,
  failRequest,
  getUserList,
  setUserList,
};
