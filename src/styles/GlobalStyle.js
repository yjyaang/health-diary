import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: inherit;
        a {
            text-decoration: none;
            &:focus, &:hover, &:visited, &:link, &:active {
                text-decoration: none;
            }
        }
    }
    body {
        /* font-family: 'GmarketSansMedium'; */
        font-family: 'S-CoreDream-4Regular';
    }
    .app-wrap {
    position: relative;
    max-width: 900px;
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    }

    .wrap {
    width: 100%;
    height: calc(100vh - 100px);
    height: calc((var(--vh, 1vh) * 100) - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

export default GlobalStyle;