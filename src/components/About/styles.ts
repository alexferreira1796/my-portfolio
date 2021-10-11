import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
    width: 100%;
`

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.secondary};
    padding-bottom: 125px;
    text-align: justify;
`;

export const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: columns;
`;