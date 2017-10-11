import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import { shallow, mount } from 'enzyme';

describe('Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Input />)
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div with the class of input-div', () => {
    expect(wrapper.find('div.input-div').length).toEqual(1);
  });

  it('should render a input element with the class of input', () => {
    expect(wrapper.find('input.input').length).toEqual(1);
  });

  it('state should have an empty input', () => {
    expect(wrapper.state('input')).toEqual('');
  })

  it('should update state when user types into input', () => {
    expect(wrapper.state('input')).toEqual('');

    wrapper.mount(<Input />);

    const input = wrapper.find('.input');

    input.simulate("change", { target: { value: 'One'}});

    expect(wrapper.state('input')).toEqual('One')
  });
});
