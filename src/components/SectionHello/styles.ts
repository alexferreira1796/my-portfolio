import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
    width: 100%;
    margin-top: 125px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 680px) {
        margin-top: 0px;
        flex-direction: column;
    }
`

export const About = styled.div`
    width: 50%;

    @media screen and (max-width: 680px) {
        width: 100%;
        order: 2;
    }
`

export const Image = styled.div`
    width: 50%;
    height: 300px;
    position: relative;

    @media screen and (max-width: 680px) {
        width: 100%;
        order: 1;
        margin-bottom: 0px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    line-height: 47px;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 18px;
`

export const Subtitle = styled.h4`
    color: ${({theme}) => theme.colors.secondary};
    margin-bottom: 18px;
`

export const Buttons = styled.section`
    display: flex;
    align-items: center;

    & button {
        margin-right: 20px;
    }
`