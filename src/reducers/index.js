import { combineReducers } from 'redux';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions';

const initialCounterState = {
  count: 3
};

function counter(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER: return { ...state, count: state.count - 1 };
    default: return state;
  }
}


export default combineReducers({
  counter
})
