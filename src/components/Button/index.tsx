import * as S from "./styles";
import Link from "next/link";

export interface IColors {
  color: string;
  bgColor: string;
}

interface IButton {
  text: string;
  colors: IColors;
  link?: string;
}

export const Button = ({ text, colors, link = "#", ...rest }: IButton) => {
  return (
    <S.Button colors={colors}>
      <Link href={link} {...rest}>
        <a target="_blank">{text}</a>
      </Link>
    </S.Button>
  );
};
