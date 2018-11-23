import * as React from 'react';

import styled, { keyframes } from 'styled-components';

import { OutsideClick } from './OutsideClick';
import { Overlay } from './Overlay';

const opacityOn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 580px;
  max-height: 700px;
  padding: 30px 0;
  background-color: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 1;
  animation: ${opacityOn} 0.2s normal ease-in;
`;

const Body = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

const Header = styled.div`
  padding: 0 30px;
`;

const FooterContainer = styled.div`
  border-top: 1px solid ${p => p.theme.colors.border};
`;

const Footer = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.handleEsc = this.handleEsc.bind(this);
  }
  componentDidMount() {
    const { onClose } = this.props;

    if (onClose) {
      document.addEventListener('keyup', this.handleEsc, true);
    }
  }

  componentWillUnmount() {
    const { onClose } = this.props;

    if (onClose) {
      document.removeEventListener('keyup', this.handleEsc, true);
    }
  }

  handleEsc(e) {
    e.preventDefault();
    const { onClose } = this.props;

    if (e.keyCode === 27) {
      onClose();
    }
  }

  render() {
    const { onClose, children, header, footer } = this.props;
    return (
      <Overlay>
        <Container>
          <OutsideClick onClick={onClose}>
            <HeaderContainer>
              <Header>{header}</Header>
            </HeaderContainer>
            <Body>{children}</Body>
            <FooterContainer>
              <Footer>{footer}</Footer>
            </FooterContainer>
          </OutsideClick>
        </Container>
      </Overlay>
    );
  }
}
