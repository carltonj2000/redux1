import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        Counter: {this.props.counter.count}<br />
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = ({counter}) => {
  return { counter: counter };
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => dispatch(decrementCounter()),
    increment: () => dispatch(incrementCounter()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
