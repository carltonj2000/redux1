import React, { Component } from 'react';
import Counters from './Counters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <Counters />
      </div>
    );
  }
}
export default App;
