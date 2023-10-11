const { put, call } = require("redux-saga/effects");
const { failRequest, makeRequest, setUserList } = require("../../actions/index");
const { requestUserList } = require("../requests/user");

function* fetchUserList({ payload }) {
  try {
    yield put(makeRequest());
    const response = yield call(requestUserList);
    yield put(setUserList(response.data.details));
  } catch (error) {
    yield put(failRequest(error.message));
  }
}

module.exports = {
  fetchUserList,
};
