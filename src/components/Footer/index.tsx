import React from "react";
import * as S from "./styles";
import { TranslateGlobal } from "../../contexts/translateGlobal";

export const Footer = () => {
  const { getTranslate } = React.useContext(TranslateGlobal);

  const fullYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Paragraph>
        {fullYear} - {getTranslate("footer.text")}{" "}
        <span>{getTranslate("footer.name")}</span>
      </S.Paragraph>
    </S.Footer>
  );
};
