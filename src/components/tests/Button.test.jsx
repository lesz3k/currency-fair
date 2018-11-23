import { mount } from 'enzyme';
import * as React from 'react';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

import Button from '../Button';

describe('<Button />', () => {
  it('should render proper text', () => {
    const text = 'some action';

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button text={text} />
      </ThemeProvider>,
    );

    expect(
      wrapper
        .find('button')
        .at(0)
        .text(),
    ).toEqual(text);
  });
});
