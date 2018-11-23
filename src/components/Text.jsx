import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: ${p => p.theme.fonts.sizes.normal};
  font-family: 'Post Grotesk';
  font-weight: ${p => (p.medium ? 500 : `normal`)};
  font-style: normal;
  color: ${p => (p.medium ? p.theme.colors.grey2 : p.theme.colors.lightGrey2)};
  margin: 15px 0;
`;

export default class Text extends PureComponent {
  render() {
    const { medium, children, className } = this.props;
    return (
      <Wrapper className={className} medium={medium}>
        {children}
      </Wrapper>
    );
  }
}
