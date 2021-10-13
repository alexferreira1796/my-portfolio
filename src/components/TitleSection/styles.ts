import styled from "styled-components";

export const Line = styled.div`
    margin-top: 125px;
    position: relative;
    &::before {
        content: "";
        border: 1px solid ${({theme}) => theme.colors.secondary};
        width: 50%;
        position: absolute;
        left: 50%;
        top: 50;
        transform: translate(-50%, 50%);
    }

    @media screen and (max-width: 997px) {
       margin-top: 50px; 
    }
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.white};
    font-size: 32px;
    line-height: 42px;
    padding-bottom: 30px;
    text-align: center;
    padding-top: 30px;

    @media screen and (max-width: 400px) {
       font-size: 20px;
    }
    
`