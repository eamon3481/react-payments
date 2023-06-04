import { css, Global } from "@emotion/react";

const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }

  li,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }

  input {
    font-size: 16px;

    appearance: none;
    border: none;
    outline: none;
  }
`;

const GlobalStyle = () => <Global styles={globalStyleCss} />;

export default GlobalStyle;
