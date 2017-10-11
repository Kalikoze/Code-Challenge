import React, { Component } from 'react';
import Input from '../Input/Input'
import Display from '../Display/Display'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.submitInput = this.submitInput.bind(this);
  };

  submitInput(input) {
    this.setState({value: input})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Challenge</h1>
        </header>
        <main>
          <Input submitInput={this.submitInput} />
          <Display displayValue={this.state.value} />
        </main>
      </div>
    );
  }
}

export default App;
