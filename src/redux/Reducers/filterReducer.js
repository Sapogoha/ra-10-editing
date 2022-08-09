import types from '../actionTypes';

const INITIAL_STATE = '';

const filterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === types.filter) {
    const { element } = action.payload;
    return element;
  } else {
    return state;
  }
};

export default filterReducer;
