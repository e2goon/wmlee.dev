import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
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
    background: #d7dae8;
  }
`

export default GlobalStyle
