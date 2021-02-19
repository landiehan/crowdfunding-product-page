import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Commissioner', sans-serif;
  }
`;

const palette = {
  moderateCyan: 'hsl(176, 50%, 47%)',
  darkCyan: 'hsl(176, 72%, 28%)',
  darkGray: 'hsl(0, 0%, 48%)'
}

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}