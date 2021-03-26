import { INCREASE_COUNT, GET_RANDOM_NUMBER, RECIEVED_RANDOM_NUMBER, GET_RANDOM_NUMBER_ERROR } from '../constants/action-types'

const initialState = {
    count: 0,
    randomNumber: null,
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type){
      case  INCREASE_COUNT:
        return {...state, count: state.count+1};
      //case GET_RANDOM_NUMBER:
      //  return {...state, randomNumber: Math.random()};
      case RECIEVED_RANDOM_NUMBER:
        return {...state, randomNumber: action.payload}
      case GET_RANDOM_NUMBER_ERROR:
        return {...state, randomNumber: action.payload}
    }
    return state;
  };
  
  export default rootReducer;