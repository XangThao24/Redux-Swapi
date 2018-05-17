import { FETCHING, FETCHED, ERROR } from '../actions';
const initialState = {
  starWarsChar: [],
  isFetching: false,
  error: null

};
export const charsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {...state, isFetching: payload}
    case FETCHED:
      return {...state, isFetching: false, starWarsChar: [...state.starWarsChar, ...payload]}
      // let newObj = Object.assign({}, state, {isFetching: false, starWarsChar: state.starWarsChar.concat(action.payload)});
      // return newObj;
    case ERROR:
      return {...state, error: payload, isFetching: false}
    default:
      return state;
  }
};
