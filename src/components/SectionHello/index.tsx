import React from "react";
import Image from "next/image";
import * as S from "./styles";
import { TranslateGlobal } from "../../contexts/translateGlobal";
import { Button } from "../Button";
import theme from "../../global/styles/theme";

import { Social } from "../../utils/social";

export const SectionHello = () => {
  const { getTranslate } = React.useContext(TranslateGlobal);
  const { path } = Social[3];

  return (
    <S.Container>
      <S.About>
        <S.Title>
          {getTranslate("sectionHello.title")}
          <br />
          {getTranslate("sectionHello.apresentation")}
        </S.Title>
        <S.Subtitle>{getTranslate("sectionHello.subtitle")}</S.Subtitle>

        <S.Buttons>
          <Button
            text="Download CV"
            colors={{
              color: theme.colors.primary,
              bgColor: theme.colors.tertiary,
            }}
          />
          <Button
            text={getTranslate("sectionHello.button")}
            link={path}
            colors={{
              color: theme.colors.white,
              bgColor: theme.colors.primary,
            }}
          />
        </S.Buttons>
      </S.About>

      <S.Image>
        <Image src="/svg/programming.svg" layout="fill" alt="logo" />
      </S.Image>
    </S.Container>
  );
};
