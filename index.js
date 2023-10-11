const { store, persistor } = require("./src/store");
const { getUserList } = require("./src/actions/index");
module.exports = {
  store,
  persistor,
  getUserList,
};
