import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, 'Noto Sans KR', Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    background: #f0f1fa;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a, input, button, textarea {
    font: inherit;
    color: inherit;
  }

  ::selection {
    background: lightyellow;
    color: #000;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    &-focusable:active,
    &-focusable:focus {
      position: static;
      width: auto;
      height: auto;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 90%;
    }
  }
`

export default GlobalStyle
