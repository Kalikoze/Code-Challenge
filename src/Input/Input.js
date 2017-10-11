import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      console.log('fired')
    }
  }

  render() {
    return(
      <div className='input'>
      <input type='text'
        className= 'title-input'
        placeholder='Enter a phrase...'
        value={this.state.input}
        onChange={e => this.handleChange(e)}
        onKeyDown={this.handleEnter} />
      </div>
    )
  }
}
