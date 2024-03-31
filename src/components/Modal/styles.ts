import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 20px;
  width: 100%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 1.3em;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  width: 100%;
`;
