import { combineReducers, compose, legacy_createStore } from 'redux';

import listServiceReducer from './listServiceReducer';

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      listServiceReducer: listServiceReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
