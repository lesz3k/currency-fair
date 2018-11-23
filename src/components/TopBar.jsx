import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import Logo from '../Logo.jsx';

const Bar = styled.header`
  height: 66px;
  width: 100%;
  background: ${p => p.theme.colors.darkPurple};
  text-align: center;
  overflow: hidden;
`;

export default class TopBar extends Component {
  render() {
    return (
      <Bar role="banner">
        <Container>
          <Logo />
        </Container>
      </Bar>
    );
  }
}
