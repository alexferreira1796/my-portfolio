import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 60px;
    padding: 20px 0;
    background-color: ${({theme}) => theme.colors.border};
    margin-top: 143px;

    @media screen and (max-width: 997px) {
       margin-top: 50px; 
    }
`

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
    line-height: 21px;
    text-align: center;

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`