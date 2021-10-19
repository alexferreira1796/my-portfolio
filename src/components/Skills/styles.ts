import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  svg {
    margin: 0 auto;
  }

  @media screen and (max-width: 997px) {
    margin-top: 0px;
    flex-wrap: wrap;
  }
`;
