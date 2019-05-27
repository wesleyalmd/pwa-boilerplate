import { createGlobalStyle, css } from 'styled-components';

const global = css`
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

  html,
  body,
  #main {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

export default createGlobalStyle`
  ${global}
`;
