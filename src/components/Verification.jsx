import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Modal } from './Modal';
import SmsCode from './SmsCode';
import Button from './Button';

const fontMedium = `
  font-family: 'Post Grotesk';
  font-style: normal;
`;

const HeaderTitle = styled.h1`
  ${fontMedium}
  font-weight: 500;
  font-size: ${p => p.theme.fonts.sizes.title};
  color: ${p => p.theme.colors.modalTitle};
  margin-bottom: 20px;
`;

const HeaderText = styled.p`
  ${fontMedium}
  font-weight: normal;
  font-size: ${p => p.theme.fonts.sizes.normal};
  color: ${p => p.theme.colors.grey3};
  margin-bottom: 20px;
`;

const Back = styled.a`
  display: block;
  ${fontMedium}
  font-weight: 500;
  font-size: ${p => p.theme.fonts.sizes.small};
  color: ${p => p.theme.colors.modalTitle};
  cursor: pointer;
  margin-left: 20px;
`;

const VerifyBtn = styled(Button)`
  padding: 10px 12px;
  margin: 0;
  font-size: ${p => p.theme.fonts.sizes.normal};
`;

const ActionsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HelpLink = styled.a`
  ${fontMedium}
  font-weight: 500;
  font-size: ${p => p.theme.fonts.sizes.small};
  color: ${p => p.theme.colors.blue};
  display: block;
`;

const Icon = styled(FontAwesome)`
  color: #000;
`;

export default class Verification extends PureComponent {
  render() {
    const { onClose, phoneNumber } = this.props;
    const renderHeader = () => {
      return (
        <React.Fragment>
          <HeaderTitle>
            <Icon name="lock" /> Identity verification required
          </HeaderTitle>
          <HeaderText>
            For your security, we ocassionally require you to verify your identity by entering a
            code sent to your mobile device.
          </HeaderText>
        </React.Fragment>
      );
    };
    const renderFooter = () => {
      return (
        <React.Fragment>
          <ActionsWrap>
            <VerifyBtn text="Verify code" isDisabled={true} />
            <Back onClick={onClose}>Back</Back>
          </ActionsWrap>
          <HelpLink>I can’t access this mobile device</HelpLink>
        </React.Fragment>
      );
    };
    return (
      <Modal onClose={onClose} header={renderHeader()} footer={renderFooter()}>
        <SmsCode phoneNumber={phoneNumber} />
      </Modal>
    );
  }
}
