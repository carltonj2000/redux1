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
  const newCounters = state.counters;
  switch (action.type) {
    case INCREMENT_COUNTER:
      newCounters[index] = newCounters[index] + 1;
      return {counters: newCounters};
    case DECREMENT_COUNTER:
      newCounters[index] = newCounters[index] - 1;
      return {counters: newCounters};
    case ADD_COUNTER: return { counters: [...state.counters, 0]};
    case REMOVE_COUNTER: return {counters: [...state.counters.slice(0,index),
        ...state.counters.slice(index+1)]};
    default: return state;
  }
}


export default combineReducers({
  counters
})
