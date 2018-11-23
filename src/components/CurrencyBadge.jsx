import React, { Component } from 'react';
import styled from 'styled-components';
import Flag from './Flag';

const CurrencyBadgeContainer = styled.div`
  display: flex;
  height: 45px;
  position: relative;
  width: 90px;
  z-index: 100;
  svg {
    position: absolute;
    top: 12px;
    left: 16px;
    z-index: 100;
  }
`;

const Currency = styled.div`
  display: flex;
  align-items: center;
  background: ${p => p.theme.colors.white};
  justify-content: center;
  font-family: 'Post Grotesk';
  font-weight: bold;
  font-style: normal;
  font-size: ${p => p.theme.fonts.sizes.subTitle};
  color: ${p => p.theme.colors.grey2};
  height: 45px;
  padding: 0 12px;
  border: 1px solid ${p => p.theme.colors.border};
  border-left: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 90;
`;

const Circle = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 100%;
  z-index: 40;
  position: absolute;
  top: 0;
  left: 6px;
`;

const CurrencyFlag = styled(Flag)``;

export default class CurrencyBadge extends Component {
  render() {
    const { currency } = this.props;
    return (
      <CurrencyBadgeContainer>
        <Circle />
        <CurrencyFlag currency={currency} />
        <Currency>{currency}</Currency>
      </CurrencyBadgeContainer>
    );
  }
}
