const axios = require("axios");

function requestUserList() {
  return axios.get(`https://node-crud-3.onrender.com/allpost`);
}

module.exports = {
  requestUserList,
};
