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
`;

export const Icon = styled.div`
    svg {
        font-size: 45px;
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 24px;
    line-height: 42px;
    font-family: ${({theme}) => theme.fonts.medium};
`;