import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    flex-direction: column;

    &:hover {
        div {
            background-color: ${({theme}) => theme.colors.tertiary};
        }
        svg {
            color: ${({theme}) => theme.colors.primary};
        }
    }
`

export const Icon = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 30px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.border};
    color: ${({theme}) => theme.colors.tertiary};
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
`

export const Name = styled.p`
    margin-bottom: 10px;
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-weight: bold;
` 

export const Text = styled.p`
    margin-bottom: 10px;
    color: ${({theme}) => theme.colors.secondary};

` 