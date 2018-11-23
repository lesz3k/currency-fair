import React, { Component } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border: 1px solid ${p => p.theme.colors.darkBlue};
  border-radius: 4px;
  cursor: pointer;
  padding: 14px 18px;
  margin-bottom: 30px;
  font-size: ${p => p.theme.fonts.sizes.subTitle};
  &:disabled,
  &[disabled] {
    opacity: 0.3;
  }
`;

export default class Button extends Component {
  render() {
    const { text, onClick, isDisabled, className } = this.props;
    return (
      <Btn className={className} disabled={isDisabled} onClick={onClick}>
        {text}
      </Btn>
    );
  }
}
