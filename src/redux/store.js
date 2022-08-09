import { combineReducers, compose, legacy_createStore } from 'redux';

import listServiceReducer from './Reducers/listServiceReducer';
import filterReducer from './Reducers/filterReducer';

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      listService: listServiceReducer,
      filter: filterReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
