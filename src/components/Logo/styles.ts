import styled from 'styled-components'

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

    @media screen and (max-width: 997px) {
        margin-bottom: 30px;
    }
`