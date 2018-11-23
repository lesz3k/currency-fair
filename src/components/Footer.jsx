import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.lightGrey4};
  margin-top: 30px;
  padding: 17px 0;
`;

const FooterItem = styled.p`
  color: ${p => p.theme.colors.blueLight};
  font-family: 'Post Grotesk';
  font-weight: 500;
  font-style: normal;
  font-size: ${p => p.theme.fonts.sizes.small};
`;

const Copyright = styled(FooterItem)`
  color: ${p => p.theme.colors.lightGrey3};
`;

const FooterLinks = styled.div`
  display: flex;
`;

const Link = styled(FooterItem)`
  margin-left: 20px;
  a {
    color: ${p => p.theme.colors.blueLight};
    text-decoration: none;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Copyright>© 2018 CurrencyFair</Copyright>
        <FooterLinks>
          <Link>
            <a href="#">Help & Support</a>
          </Link>
          <Link>
            <a href="#">Legal Stuff</a>
          </Link>
        </FooterLinks>
      </FooterContainer>
    );
  }
}
