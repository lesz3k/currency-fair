import React, { Component } from 'react';
import styled from 'styled-components';

const Border = styled.div`
  height: calc(100vh - 66px);
  width: 1px;
  background: ${p => p.theme.colors.border};
  ${p => p.theme.media.m.andDown} {
    display: none;
  }
`;

export default class PageBorder extends Component {
  render() {
    return <Border />;
  }
}
