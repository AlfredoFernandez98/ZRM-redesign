import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Helvetica';
    src: url('/HelveticaBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: optional;
    size-adjust: 100%;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url('/HelveticaBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: optional;
    size-adjust: 100%;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/open-sans.regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: optional;
    size-adjust: 100%;
  }

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
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  .animate {
    opacity: 0;
    transform: translateY(20px) translateZ(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
    will-change: opacity, transform;
  }

  .animate.visible {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-synthesis: none;
    text-rendering: optimizeSpeed;
  }

  /* Use system fonts on mobile, custom fonts on desktop */
  @media (min-width: 769px) {
    body {
      font-family: ${({ theme }) => theme.fonts.body};
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-weight: 700;
    }
    
    p, span, a, li, div, button, input, textarea, select {
      font-family: ${({ theme }) => theme.fonts.body};
    }
  }

  /* System fonts for mobile (no loading required) */
  @media (max-width: 768px) {
    h1, h2, h3, h4, h5, h6 {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      font-weight: 700;
    }
    
    p, span, a, li, div, button, input, textarea, select {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    }
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
