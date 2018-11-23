import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Step from './Step';

const StepsList = styled.ul`
  display: flex;
  width: 100%;
  margin-bottom: 45px;
`;

export default class Steps extends PureComponent {
  render() {
    return (
      <StepsList>
        <Step active={true} number={1} title="Transaction info" />
        <Step number={2} title="Recipient info" />
        <Step number={3} title="Make payment" />
      </StepsList>
    );
  }
}
