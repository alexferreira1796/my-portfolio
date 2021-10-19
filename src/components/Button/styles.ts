import styled from "styled-components";
import { IColors } from "./index";

interface IButton {
  colors: IColors;
}

export const Button = styled.button`
  background-color: ${(props: IButton) => `${props.colors.bgColor}`};

  a {
    color: ${(props: IButton) => `${props.colors.color}`};
  }

  &:hover {
    background-color: ${(props: IButton) => `${props.colors.color}`};
    a {
      color: ${(props: IButton) => `${props.colors.bgColor}`};
    }
  }
`;
