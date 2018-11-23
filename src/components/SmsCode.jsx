import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const fontMedium = p => `
  font-family: 'Post Grotesk';
  font-style: normal;
`;

const InputGroup = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Input = styled.input`
  height: 50px;
  width: 50px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  font-size: ${p => p.theme.fonts.sizes.subTitle};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  ${fontMedium()}
  font-weight: 500;
  font-size: ${p => p.theme.fonts.sizes.subTitle};
  color: ${p => p.theme.colors.grey4};
`;

const Number = styled.p`
  ${fontMedium()}
  font-weight: 500;
  font-size: ${p => p.theme.fonts.sizes.subTitle};
  color: ${p => p.theme.colors.lightGrey5};
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid ${p => p.theme.colors.lightGrey4};
`;

const HelpItems = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const HelpText = styled.p`
  ${fontMedium()}
  font-weight: normal;
  font-size: ${p => p.theme.fonts.sizes.small};
  color: ${p => p.theme.colors.modalTitle};
`;

const Icon = styled(FontAwesome)`
  color: #000;
`;

export default class SmsCode extends PureComponent {
  render() {
    const inputs = '012345';
    const inputsArr = [...inputs];
    const { phoneNumber } = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          <Title>Enter the code sent via SMS to</Title> <Number>{phoneNumber}</Number>
        </Wrapper>
        <InputGroup>
          {inputsArr.map((el, i) => (
            <Input key={i} />
          ))}
        </InputGroup>
        <HelpItems>
          <HelpText>
            <Icon name="redo-alt" /> Receive a new code
          </HelpText>
          <HelpText>
            <Icon name="phone" /> Receive code via call instead
          </HelpText>
        </HelpItems>
      </React.Fragment>
    );
  }
}
