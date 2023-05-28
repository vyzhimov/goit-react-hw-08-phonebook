import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NoPageLink = styled(Link)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & img {
    width: 300px;
  }
`;
