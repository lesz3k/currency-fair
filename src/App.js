import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './theme';
import TopBar from './components/TopBar';
import TransactionDetails from './components/TransactionDetails';
import PageBorder from './components/PageBorder';
import SendingDetails from './components/SendingDetails';
import { connect } from 'react-redux';
import { getTransaction, showModal } from './actions/actions';
import Verification from './components/Verification';
import { Optional } from './components/Optional';

const Main = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: ${p => p.theme.media.sizes.sm};
  position: relative;
  ${p => p.theme.media.m.andDown} {
    flex-direction: column-reverse;
    margin: 20px;
  }
`;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onBtnClick() {
    const { showModal } = this.props;
    showModal(true);
  }

  onClose() {
    const { showModal } = this.props;
    showModal(false);
  }

  componentDidMount() {
    this.props.getTransaction();
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const {
      sendAmount,
      sendCurrency,
      receiveAmount,
      receiveCurrency,
      showModal,
      phoneNumber,
    } = this.props.reducer;
    return (
      <React.Fragment>
        <GlobalStyle />
        <TopBar />
        <Main>
          <TransactionDetails
            sendAmount={sendAmount}
            sendCurrency={sendCurrency}
            receiveAmount={receiveAmount}
            receiveCurrency={receiveCurrency}
            onBtnClick={this.onBtnClick}
          />
          <PageBorder />
          <SendingDetails />
        </Main>
        <Optional
          renderIf={!!showModal}
          component={() => (
            <Verification phoneNumber={phoneNumber} onClose={this.onClose}>
              <p>blah</p>
            </Verification>
          )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  showModal: showOrHide => dispatch(showModal(showOrHide)),
  getTransaction: () => dispatch(getTransaction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
