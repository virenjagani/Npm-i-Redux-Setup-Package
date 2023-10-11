const {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} = require("@reduxjs/toolkit");
const storage = require("redux-persist/lib/storage").default;
const {Reducer} = require("./reducers/index");
const { persistReducer, persistStore } = require("redux-persist");
const {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} = require("redux-persist");
// const logger = require("redux-logger");
const createSagaMiddleware = require("redux-saga").default;
const { watcherSaga } = require("./sagas/rootSaga");
const { getUserList } = require("./actions/index");
const { createLogger } = require('redux-logger');

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger()
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  reducer: Reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getDefaultMiddlewares = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, sagaMiddleware 
    ,...getDefaultMiddlewares
  ],
});

sagaMiddleware.run(watcherSaga);

const persistor = persistStore(store);

// export { store, persistor };

module.exports = {
  store,
  persistor,
  getUserList,
};

// => store, persistor
//dispatch method => getUseList
//
