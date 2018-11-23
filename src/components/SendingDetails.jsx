import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from './Text';
import { currencyChooser } from '../utils';

const textStyles = p => `display: block;
  font-size: ${p.theme.fonts.sizes.small};
  font-family: 'Post Grotesk';
  font-style: normal;
  font-weight: normal;
  `;

const SendingDetailsContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 4px;
  align-self: flex-start;
  margin: 0 50px;
  position: fixed;
  top: ${p => p.scrollFromTop};
  @media (min-width: 1500px) {
    left: 57%;
  }
  @media (max-width: 1499px) {
    left: 60%;
  }
  ${p => p.theme.media.m.andDown} {
    position: static;
    margin: 0;
    width: 100%;
  }
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  > * {
    padding: 0 20px;
    margin: 0;
  }
`;

const HelpText = styled.p`
  ${p => textStyles(p)}
  color: ${p => p.theme.colors.blueLight};
  position: relative;
  padding-right: 15px;
  margin-right: 20px;
  &:after {
    content: '';
    background: ${p => p.theme.colors.blueLight};
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    top: 1px;
    right:0;
  }
  &:before {
    content: '?';
    color: ${p => p.theme.colors.white};
    font-size: 8px;
    position: absolute;
    top: 2px;
    right:3px;
    z-index: 100;
  }
`;

const DetailsFooter = styled(DetailsItem)`
  justify-content: center;
`;

const FooterText = styled.p`
  ${p => textStyles(p)}
  color: ${p => p.theme.colors.yellow};
  strong {
    font-weight: bold;
    padding: 0 4px;
  }
`;

const ItemsList = styled.div`
  > * {
    margin: 20px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:last-child {
    text-align: right;
  }
`;

class SendingDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { scrollFromTop: '105px' };
  }
  componentDidMount() {
    //adjust the position of the Sidebar on scroll, so that it stays fixed to one position
    const setNewScroll = amount => this.setState({ scrollFromTop: amount });
    window.onscroll = () => {
      let offsetY = window.pageYOffset;
      offsetY > 66 ? setNewScroll('50px') : setNewScroll('105px');
    };
  }
  render() {
    const { scrollFromTop } = this.state;
    const {
      sendAmount,
      sendCurrency,
      receiveAmount,
      receiveCurrency,
      rate,
      fee,
      deliveryDate,
      savedAmount,
    } = this.props.reducer;
    const receivedCurrency = currencyChooser(receiveCurrency);
    return (
      <SendingDetailsContainer scrollFromTop={scrollFromTop}>
        <DetailsItem>
          <Text medium={true}>Sending Details</Text>
        </DetailsItem>
        <DetailsItem>
          <Text>You send</Text>
          <Text medium={true}>
            {currencyChooser(sendCurrency)}
            {sendAmount}
          </Text>
        </DetailsItem>
        <DetailsItem>
          <Text medium={true}>Receiving Details</Text>
          <HelpText>As of right now</HelpText>
        </DetailsItem>
        <DetailsItem>
          <ItemsList>
            <Text>Rate</Text>
            <Text>Fee</Text>
            <Text>Delivery date</Text>
            <Text>Recipient gets</Text>
          </ItemsList>
          <ItemsList>
            <Text>{rate}</Text>
            <Text>
              {receivedCurrency}
              {fee}
            </Text>
            <Text>{deliveryDate}</Text>
            <Text medium={true}>
              {receivedCurrency}
              {receiveAmount}
            </Text>
          </ItemsList>
        </DetailsItem>
        <DetailsFooter>
          <FooterText>
            You save
            <strong>
              {receivedCurrency}
              {savedAmount}
            </strong>
            compared to your bank!
          </FooterText>
        </DetailsFooter>
      </SendingDetailsContainer>
    );
  }
}

SendingDetailsContainer.defaultProps = {
  scrollFromTop: '50px',
};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(SendingDetails);
