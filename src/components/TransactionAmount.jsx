import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Text from './Text';
import { currencyChooser } from '../utils';
import CurrencyBadge from './CurrencyBadge';

const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${p => p.theme.fonts.sizes.title};
  padding: 20px 25px;
  border: 1px solid;
  ${p =>
    p.send
      ? `border-radius:4px 4px 0px 0px; border-color: ${p.theme.colors.blue}`
      : `border-radius:0px 0px 4px 4px; border-color: ${p.theme.colors.border2}`}
`;

const Details = styled.div``;

const Title = styled(Text)`
  color: ${p => (p.send ? p.theme.colors.blue : p.theme.colors.lightGrey2)};
  text-transform: uppercase;
  margin: 0 0 15px 0;
`;

const Total = styled.p`
  font-family: 'Post Grotesk';
  font-weight: 500;
  font-style: normal;
  font-size: ${p => p.theme.fonts.sizes.xlarge};
  color: ${p => p.theme.colors.title};
  ${p => p.theme.media.xs.andDown} {
    font-size: ${p => p.theme.fonts.sizes.title};
  }
`;

export default class TransactionAmount extends PureComponent {
  render() {
    const { amount, title, currency, send } = this.props;
    return (
      <Amount send={send}>
        <Details>
          <Title send={send}>{title}</Title>
          <Total currency={currency}>
            {currencyChooser(currency)} {amount}
          </Total>
        </Details>
        <CurrencyBadge currency={currency} />
      </Amount>
    );
  }
}
