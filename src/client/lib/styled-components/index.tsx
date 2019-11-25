import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    padding-left: 200px;
  }

  h1,
  h2 {
    margin-top: 0;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 28px;
    border-bottom: 1px solid #e3e3e3;
  }

  h2 {
    font-size: 22px;
  }
`;