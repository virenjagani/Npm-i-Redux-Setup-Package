const { GET_USER_LIST } = require("../actions/index");
const { takeLatest, fork, all } = require("redux-saga/effects");
const { fetchUserList } = require("./handlers/user");

function* userListGenerator() {
  yield takeLatest(GET_USER_LIST, fetchUserList);
}

const userListSaga = [fork(userListGenerator)];

function* watcherSaga() {
  yield all([...userListSaga]);
}

module.exports = {
  watcherSaga,
};
