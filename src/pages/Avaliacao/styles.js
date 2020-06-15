import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { FaReply } from 'react-icons/fa';

export const ButtonGoBack = styled(FaReply).attrs({
  size: 25,
})`
  display: inline-block;
  margin: auto 0;
  color: #1ab394;  

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  background-color: white;
  padding: 20px 40px;

  p {
    display: inline-block;
    margin: auto auto;
    font-size: 18px;
  }
`;

export const Form = styled(Table).attrs({
  responsive: 'md',
})`
  background-color: white;
  width: 100%;
  margin-top: 10px;

`;