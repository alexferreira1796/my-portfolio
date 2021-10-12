import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
`

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.white};
    font-size: 26px;
    line-height: 33px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 30px;
        margin-left: 15px;
    }
`