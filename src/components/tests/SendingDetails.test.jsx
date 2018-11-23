import { mount } from 'enzyme';
import * as React from 'react';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import { createMockStore } from 'redux-test-utils';

import SendingDetails from '../SendingDetails';

describe('<SendingDetails />', () => {
  it('should render proper data', () => {
    const testState = {
      reducer: {
        sendAmount: '2,000.00',
        sendCurrency: 'EUR',
        receiveAmount: '1,717.94',
        receiveCurrency: 'GBP',
        rate: '0.86022',
        fee: '2.50',
        deliveryDate: '25th of November',
        savedAmount: '66.19',
        phoneNumber: '+353 872251177',
      },
    };

    const store = createMockStore(testState);

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <SendingDetails store={store} />
      </ThemeProvider>,
      {
        context: { store },
      },
    );

    expect(
      wrapper
        .find('div')
        .at(1)
        .text(),
    ).toEqual('Sending Details');

    expect(
      wrapper
        .find('div')
        .at(2)
        .text(),
    ).toEqual('You send€2,000.00');
  });
});
