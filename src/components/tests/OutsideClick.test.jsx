import { mount } from 'enzyme';
import * as React from 'react';

import { OutsideClick } from '../OutsideClick';

describe('<OutsideClick />', () => {
  it('execute onClick then clicked outside of component', () => {
    const onClick = jest.fn();
    jest.useFakeTimers();
    const eventMap = {
      click: null,
    };

    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    const wrapper = mount(
      <div id="container">
        <OutsideClick onClick={onClick} />
      </div>,
    );

    eventMap.click({ target: wrapper.find('#container')[0] });
    jest.runAllTimers();
    expect(onClick).toBeCalled();
  });

  it('execute onClick then clicked inside component on a element with trackAClick=true', () => {
    const onClick = jest.fn();
    jest.useFakeTimers();
    const eventMap = {
      click: null,
    };

    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    const wrapper = mount(
      <OutsideClick trackAClick={true} onClick={onClick}>
        <a>link</a>
      </OutsideClick>,
    );

    eventMap.click({ target: wrapper.find('a')[0] });
    jest.runAllTimers();
    expect(onClick).toBeCalled();
  });
});
