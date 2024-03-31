import styled from 'styled-components';

interface IPhoto {
  image: string;
}

export const Container = styled.div`
  height: 240px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  background-color: ${({ theme }) => theme.colors.border};
  padding: 20px;
  border: 10px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  @media screen and (max-width: 997px) {
    width: 100%;
  }
`;

export const ContainerDesc = styled.div``;

export const Photo = styled.div`
  width: 100%;
  height: 130px;
  background-image: ${(props: IPhoto) => `url(${props.image})`};
  border: 5px solid ${({ theme }) => theme.colors.primary};
  background-size: cover;
  margin-bottom: 23px;
      background-position: center;

  @media screen and (max-width: 997px) {
    background-size: cover;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  line-height: 23px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
`;

export const PhotoModal = styled.div`
  width: auto;
  height: 500px;
  background-image: ${(props: IPhoto) => `url(${props.image})`};
  border: 5px solid ${({ theme }) => theme.colors.primary};
  background-size: cover;

  @media screen and (max-width: 997px) {
    background-size: cover;
  }
`;