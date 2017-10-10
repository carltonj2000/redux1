import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter
} from '../actions';
import Counter from './Counter';

class Counters extends Component {
  render() {
    return (
      <span className="Counters">
        <button onClick={this.props.add}>Add Counter</button>
        {this.props.counters.counters.map((counter, index) =>
          <div key={index}>
          <span>{index}</span>&nbsp;
          <Counter
            increment={() => this.props.increment(index)}
            decrement={() => this.props.decrement(index)}
            count={counter}
          />
        <button onClick={() => this.props.remove(index)}>Remove Counter</button>
        </div>
        )}
      </span>
    );
  }
}

const mapStateToProps = ({counters}) => {
  return { counters: counters };
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addCounter()),
    remove: (index) => dispatch(removeCounter(index)),
    increment: (index) => dispatch(incrementCounter(index)),
    decrement: (index) => dispatch(decrementCounter(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
