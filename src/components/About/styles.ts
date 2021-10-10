import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
    width: 100%;
`

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.secondary};
    padding-bottom: 85px;
    text-align: justify;
`;