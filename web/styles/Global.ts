import { createGlobalStyle } from "styled-components";

//fe938c
//#ebf2f7;
export default createGlobalStyle`
  :root {
    --main-white: #fff;
    --secondary-white: #f0f0f0;
    --light-gray: #ebf2f7;
    --main-black: #222;
    --light-black: #22222266;
    --secondary-black: #555;
    --shadow: #bfcbc2;
    --main-salmon: #ff686b;   
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
    background: var(--main-white);
    min-height: 100%;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
