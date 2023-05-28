import styled from '@emotion/styled';
import BackgroundImg from '../images/background.jpeg';

export const HomeContainer = styled.div`
  background: url(${BackgroundImg});
  background-size: cover;
  height: 100%;
`;

export const Blur = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  height: 100%;
  padding-top: 200px;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 60px;
`;

export const HomeText = styled.p`
  margin-top: 20px;
  font-size: 25px;
  text-align: center;
`;
