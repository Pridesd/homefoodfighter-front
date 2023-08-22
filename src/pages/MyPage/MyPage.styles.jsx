import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;
  margin-top: 20px;
`;

export const MyPageItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 0px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  padding-left: 2rem;
`;

export const MyPageImage = styled(Link)`
  margin-bottom: 10px;
  background-color: white;
`;

export const MyPageButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 0px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding-top: 2.7rem;
`;

export const MyPageCenterItem = styled(MyPageItem)`
  grid-column: span 2;
  text-align: center;
  background-color: white;
`;
