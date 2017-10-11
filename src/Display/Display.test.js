import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { shallow, mount } from 'enzyme';

describe('Display', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Display />)
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div with the class of display', () => {
    expect(wrapper.find('div.display').length).toEqual(1);
  });
});
