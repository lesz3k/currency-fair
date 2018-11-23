//Overlay used with Modal

import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
`;

export class Overlay extends React.Component {
  render() {
    const { children } = this.props;

    return <Container>{children}</Container>;
  }
}
