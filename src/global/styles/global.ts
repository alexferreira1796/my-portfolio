import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 100%;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: ${({theme}) => theme.colors.primary}
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({theme}) => theme.fonts.bold.fontFamily};
        font-weight: ${({theme}) => theme.fonts.bold.fontWeight};
    }

    p, span, ul {
        font-family: ${({theme}) => theme.fonts.regular.fontFamily};
    }
`;