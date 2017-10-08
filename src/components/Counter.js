import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <span className="Counter">
        Counter : {this.props.count}&nbsp;
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </span>
    );
  }
}

export default Counter;
