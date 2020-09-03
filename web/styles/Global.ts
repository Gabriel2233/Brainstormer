import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --main-white: #fff;
    --secondary-white: #f0f0f0;
    --light-gray: #ebf2f7;
    --main-black: #222;
    --secondary-black: #555;
    --shadow: #bfcbc2;
    --main-salmon: #fe938c;
    --dark-salmon: #f08080;
    --shadow-salmon: #fe938c55;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    background: var(--secondary-white);
    height: 100vh;
    width: 100vw;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
