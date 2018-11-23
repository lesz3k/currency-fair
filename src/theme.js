import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const THEME_CONSTANTS = {
  media: {
    xs: 767,
    sm: 985,
    m: 1023,
    lg: 1440,
  },
};

const { media } = THEME_CONSTANTS;

export const theme = {
  colors: {
    darkPurple: '#32323c',
    white: '#ffffff',
    white2: '#fafafa',
    white3: '#fbfbfb',
    blue: '#6ec0e6',
    blueLight: '#64b5f6',
    blueLighter: 'rgba(110, 192, 230, 0.2)',
    darkBlue: '#589ab8',
    border: '#e0e0e0',
    border2: '#e6e6e6',
    grey: '#757575',
    grey2: '#616161',
    grey3: '#808080',
    grey4: '#3c454b',
    lightGrey1: '#b0bec5',
    lightGrey2: '#9e9e9e',
    lightGrey3: '#bdbdbd',
    lightGrey4: '#eeeeee',
    lightGrey5: '#999999',
    title: '#212121',
    yellow: '#ffc766',
    modalTitle: '#768895',
  },
  fonts: {
    weight: { light: 300, bold: 500, normal: 'normal' },
    sizes: {
      xsmall: '11px',
      small: '12px',
      normal: '14px',
      subTitle: '16px',
      title: '18px',
      xlarge: '28px',
    },
    family: 'Post Grotesk',
  },
  media: {
    xs: {
      only: `@media (min-width: 0px) and (max-width: ${media.xs}px)`,
      andUp: `@media (min-width: 0px)`,
      andDown: `@media (max-width: ${media.xs}px)`,
    },
    m: {
      only: `@media (min-width: ${media.xs + 1}px) and (max-width: ${media.m}px)`,
      andUp: `@media (min-width: ${media.xs + 1}px)`,
      andDown: `@media (max-width: ${media.m}px)`,
    },
    sm: { andDown: `@media (max-width: ${media.sm}px)` },
    lg: {
      andUp: `@media (min-width: ${media.lg}px)`,
      andDown: `@media (max-width: ${media.lg - 1}px)`,
    },
    sizes: { xs: `${media.xs + 1}px`, sm: `${media.sm}px`, m: `${media.m}px`, lg: `${media.lg}px` },
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      box-sizing: border-box;
  }
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.normal};
  @font-face {
    font-family: ${theme.fonts.family};
    src: url('./assets/fonts/PostGrotesk-Book.woff2') format('woff2'),
        url('./assets/fonts/PostGrotesk-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: ${theme.fonts.family};
    src: url('./assets/fonts/PostGrotesk-Bold.woff2') format('woff2'),
        url('./assets/fonts/PostGrotesk-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: ${theme.fonts.family};
    src: url('./assets/fonts/PostGrotesk-Medium.woff2') format('woff2'),
        url('./assets/fonts/PostGrotesk-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
`;
