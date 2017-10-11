import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Input from '../Input/Input';
import Display from '../Display/Display'
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the Input component', () => {
    expect(wrapper.find('Input').length).toEqual(1);
  });

  it('should render the Display component', () => {
    expect(wrapper.find('Display').length).toEqual(1);
  });

  it('should have a an empty string in the state value', () => {
    expect(wrapper.state('value')).toEqual('');
  });

  it('should display correct message', () => {
    wrapper.mount(<App />);

    const input = wrapper.find('.input');

    input.simulate("change", { target: { value: 'My two numbers are a secret.'}});

    const display = wrapper.find('.display')

    expect(display).toEqual('My three numbers are a secret.')
  });
});
