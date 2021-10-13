import styled from "styled-components";

export const Container = styled.div`
    height: 220px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    background-color: ${({theme}) => theme.colors.border};
    padding: 30px;
    flex-grow: 1;
    border: 10px solid ${({theme}) => theme.colors.primary};
    border-bottom: 5px solid ${({theme}) => theme.colors.tertiary};
    overflow: hidden;

    @media screen and (max-width: 997px) {
        width: 100%;
        border: none;
        border-bottom: 5px solid ${({theme}) => theme.colors.tertiary};
        margin-bottom: 20px;
    }
`;

export const Icon = styled.div`
    svg {
        font-size: 45px;
        color: ${({theme}) => theme.colors.tertiary};
    }

    @media screen and (max-width: 680px) {
        font-size: 18px;
    }
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 24px;
    line-height: 42px;
    font-family: ${({theme}) => theme.fonts.medium};

    @media screen and (max-width: 680px) {
        font-size: 18px;
        margin-top: 20px;
    }
`;