import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <Counter />
      </div>
    );
  }
}
export default App;
