import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 35px;
`

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.white};
    font-size: 26px;
    line-height: 33px;
`