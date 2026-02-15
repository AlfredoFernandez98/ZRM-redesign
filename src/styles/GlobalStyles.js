import { createGlobalStyle, keyframes } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => {
      return theme.fonts.body
    }};
    color: ${({ theme }) => {
      return theme.colors.text
    }};
    background: ${({ theme }) => {
      return theme.colors.white
    }};
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  /* Touch-friendly links and buttons */
  a, button {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  /* Prevent zoom on input focus on iOS */
  @media (max-width: 480px) {
    input, select, textarea {
      font-size: 16px;
    }
  }

`

export default GlobalStyles
