import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Steps from './Steps';
import Text from './Text';
import TransactionAmount from './TransactionAmount';
import Button from './Button';
import Footer from './Footer';

const TransactionContainer = styled.div`
  padding: 30px 50px 30px 0;
  width: 100%;
  max-width: 615px;
  ${p => p.theme.media.m.andDown} {
    max-width: none;
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  font-size: ${p => p.theme.fonts.sizes.title};
  font-family: 'Post Grotesk';
  font-weight: 500;
  font-style: normal;
  color: ${p => p.theme.colors.title};
  margin: 15px 0;
`;

const Subtitle = styled(Text)`
  color: ${p => p.theme.colors.grey};
`;

const TransactionsWrapper = styled.div`
  margin: 35px 0;
`;

const renderTransactions = (sendAmount, sendCurrency, receiveAmount, receiveCurrency) => {
  return (
    <TransactionsWrapper>
      <TransactionAmount
        send={true}
        title={'You send'}
        amount={sendAmount}
        currency={sendCurrency}
      />
      <TransactionAmount
        title={'Receiver gets'}
        amount={receiveAmount}
        currency={receiveCurrency}
      />
    </TransactionsWrapper>
  );
};

export default class TransactionDetails extends PureComponent {
  render() {
    const { onBtnClick, sendAmount, sendCurrency, receiveAmount, receiveCurrency } = this.props;
    return (
      <TransactionContainer>
        <Steps />
        <Title>Let's set up your transaction! </Title>
        <Subtitle>Specify the amount to be sent or received</Subtitle>
        {renderTransactions(sendAmount, sendCurrency, receiveAmount, receiveCurrency)}
        <Button onClick={onBtnClick} text={'Next'} />
        <Footer />
      </TransactionContainer>
    );
  }
}
