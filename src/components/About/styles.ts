import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
    width: 100%;
`

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.secondary};
    padding-bottom: 125px;
    text-align: justify;

    @media screen and (max-width: 997px) {
        padding-bottom: 50px;
    }

    @media screen and (max-width: 400px) {
       font-size: 16px;
    }
`;

export const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: columns;

    @media screen and (max-width: 997px) {
        flex-direction: column;
    }
`;