import { mount } from 'enzyme';
import * as React from 'react';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

import TransactionAmount from '../TransactionAmount';

describe('<TransactionAmount />', () => {
  it('should render the currency & amount', () => {
    const currency = 'EUR';
    const amount = '25';
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TransactionAmount amount={amount} currency={currency} />
      </ThemeProvider>,
    );

    expect(
      wrapper
        .find('div')
        .at(2)
        .text(),
    ).toEqual(currency);

    expect(
      wrapper
        .find('div')
        .at(1)
        .text(),
    ).toEqual('€ 25');
  });
});
