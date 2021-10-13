import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 100%;
        box-sizing: border-box;
        border: none;
    }

    html, body {
        height: 100%;
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.colors.tertiary};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.colors.secondary};
        }
    }

    html {
        scroll-behavior: smooth;
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

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        outline: none;
        width: 143px;
        height: 42px;
        font-family: ${({theme}) => theme.fonts.medium.fontFamily};
        font-weight: ${({theme}) => theme.fonts.medium.fontWeight};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        border: 1px solid #333333;
        padding: 10px;
        font-size: 14px;

        @media screen and (max-width: 600px) {
            width: 100%;
            font-size: 14px;
            padding: 1px;
            height: 50px;
        }
    }
`;