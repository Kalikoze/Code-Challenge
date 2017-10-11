import React, { Component } from 'react';
import Input from '../Input/Input'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Challenge</h1>
        </header>
        <main>
          <Input/>
        </main>
      </div>
    );
  }
}

export default App;
