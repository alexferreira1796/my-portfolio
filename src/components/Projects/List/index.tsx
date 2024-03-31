import React, { useState } from "react";

import Modal from "../../Modal";

import * as S from "./styles";
import Image from "next/image";

interface IList {
  data: {
    name: string;
    description: string;
    image: string;
    path: string;
  };
}

export const List = ({ data: { name, description, image, path } }: IList) => {
  const handleOpenPatch = () => {
    window.open(path, "_blank");
  };

  return (
    <>
      <S.Container onClick={() => handleOpenPatch()}>
        <S.Photo image={image} />

        <S.ContainerDesc>
          <S.Title>{name}</S.Title>
          <S.Description>{description}</S.Description>
        </S.ContainerDesc>
      </S.Container>
    </>
  );
};
