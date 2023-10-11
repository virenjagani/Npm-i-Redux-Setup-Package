# Redux Setup Package

This is my first Redux setup package, now available on npm. It provides a pre-configured Redux setup for your React applications, making it easy to integrate Redux into your projects.

## Features

- Easily accessible `store` and `persistor` that can be added with the root tag in your `app.js` or `index.js` file in React.

- `const reduxSetup = require('redux-setup-package/index')`.
- `const {store,persistor,getUserList} = reduxSetup`.

- A `getUserList` method that can be dispatched to fetch user data. Example: `store.dispatch(getUserList());`

- Access to the live state of the store using `const storeLiveState = store.getState();`

- Pre-configured with essential Redux middleware:
  - Logger: Provides detailed logs for Redux actions.
  - Redux-saga: For handling asynchronous actions and side effects.
  - Redux-persist: For persisting your Redux store across page reloads.

## Installation

To install this package in your project, use npm:

```bash
npm install redux-setup-package

