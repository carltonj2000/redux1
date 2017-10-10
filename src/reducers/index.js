import { combineReducers } from 'redux';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ADD_COUNTER,
  REMOVE_COUNTER
} from '../actions';

const initialCounterState = {
 counters: []
};

const counters = (state = initialCounterState, action) => {
  const {index} = action;
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {counters: [
        ...state.counters.slice(0,index),
        state.counters[index] + 1,
        ...state.counters.slice(index+1)
      ]};
    case DECREMENT_COUNTER:
      return {counters: [
        ...state.counters.slice(0,index),
        state.counters[index] - 1,
        ...state.counters.slice(index+1)
      ]};
    case ADD_COUNTER: return { counters: [...state.counters, 0]};
    case REMOVE_COUNTER: return {counters: [...state.counters.slice(0,index),
        ...state.counters.slice(index+1)]};
    default: return state;
  }
}


export default combineReducers({
  counters
})
