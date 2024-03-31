import React from "react";
import { useTheme } from "styled-components";

import { IoCloseCircleSharp } from "react-icons/io5";

import {
  ModalBackground,
  ModalContent,
  CloseButton,
  Header,
  Title,
  Content,
} from "./styles";

interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({ title, isOpen, setIsOpen, children }: ModalProps) => {
  const theme = useTheme();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <ModalBackground onClick={handleClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Header>
            <CloseButton onClick={handleClose}>
              <IoCloseCircleSharp size={30} color={theme.colors.danger} />
            </CloseButton>
            <Title>{title}</Title>
          </Header>
          <Content>{children}</Content>
        </ModalContent>
      </ModalBackground>
    )
  );
};

export default Modal;
