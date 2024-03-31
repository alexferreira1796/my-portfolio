import React from "react";
import * as S from "./styles";
import { TranslateGlobal } from "../../contexts/translateGlobal";
import { TitleSection } from "../TitleSection";
import { List } from "./List";

import { RiCodeView, RiSmartphoneFill } from "react-icons/ri";
import { FaMobile } from "react-icons/fa";

export const Services = () => {
  const { getTranslate } = React.useContext(TranslateGlobal);

  return (
    <S.Container id="services">
      <TitleSection text="services.title" />

      <S.ContainerList>
        <List title={getTranslate("services.data.web")}>
          <RiCodeView />
        </List>
        <List title={getTranslate("services.data.responsive")}>
          <RiSmartphoneFill />
        </List>
        <List title={getTranslate("services.data.app")}>
          <FaMobile />
        </List>
      </S.ContainerList>
    </S.Container>
  );
};
