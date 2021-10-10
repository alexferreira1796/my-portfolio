import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
    width: 100%;
    margin-top: 143px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const About = styled.div`
    width: 50%;
`

export const Image = styled.div`
    width: 50%;
    height: 300px;
    position: relative;
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