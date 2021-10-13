import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ContainerSkills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    @media screen and (max-width: 997px) {
        flex-direction: column;
    }

    @media screen and (max-width: 680px) {
        margin-top: 0px;
    }
`;