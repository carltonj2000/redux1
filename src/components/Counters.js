import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addCounter,
  removeCounter
} from '../actions';
import Counter from './Counter';

class Counters extends Component {
  render() {
    return (
      <div className="Counters">
        {this.props.counters.counters.map((counter, index) =>
          <Counter key=index />)}
        <button onClick={this.props.add}>Add Counter</button>
      </div>
    );
  }
}

const mapStateToProps = ({counters}) => {
  return { counters: counters };
}

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addCounter()),
    remove: () => dispatch(removeCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
