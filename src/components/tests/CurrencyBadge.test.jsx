import { mount } from 'enzyme';
import * as React from 'react';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

import CurrencyBadge from '../CurrencyBadge';

describe('<CurrencyBadge />', () => {
  it('should render the Currency type', () => {
    const currency = 'EUR';
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CurrencyBadge theme={theme} currency={currency} />
      </ThemeProvider>,
    );

    expect(
      wrapper
        .find('div')
        .at(2)
        .text(),
    ).toEqual(currency);
  });
});
