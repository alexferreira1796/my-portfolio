import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    align-items: initial;
  }
`;
