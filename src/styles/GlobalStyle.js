import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: inherit;
    }
    .app-wrap {
    position: relative;
    max-width: 900px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    }
`