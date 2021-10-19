import styled from "styled-components";
import theme from "../../../global/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  flex-grow: 1;
  height: 150px;
  padding: 20px;
  border: 10px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.border};
  svg {
    font-size: 100px;
  }
`;
