import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StepLi = styled.li`
  display: flex;
  padding: 20px;
  border-bottom: 4px solid;
  font-family: 'Post Grotesk';
  font-weight: 500;
  font-style: normal;
  font-size: ${p => p.theme.fonts.sizes.normal};
  width: 100%;
  ${p =>
    p.active
      ? `border-color: ${p.theme.colors.blue}; color: ${p.theme.colors.blue}`
      : `border-color: ${p.theme.colors.blueLighter}; color: ${p.theme.colors.lightGrey1}`};
  ${p => p.theme.media.xs.andDown} {
    padding: 20px 10px;
  }
`;

const StepNo = styled.span`
  font-size: ${p => p.theme.fonts.sizes.small};
  margin-bottom: 5px;
  display: block;
`;

const StepContainer = styled.span`
  margin: 0 auto;
  display: block;
`;

export default class Step extends PureComponent {
  render() {
    const { number, title, active } = this.props;
    return (
      <StepLi active={active}>
        <StepContainer>
          <StepNo>Step {number}</StepNo>
          <span>{title}</span>
        </StepContainer>
      </StepLi>
    );
  }
}
