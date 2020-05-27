import styled from 'styled-components';
import { Card, Table } from 'react-bootstrap';

export const CardHome = styled(Card)`
  &:hover {
    cursor: pointer;
  }

  svg { 
    color: #4CAF50;    
    margin: 0 40px 0 20px;
  }
`;

export const TableHome = styled(Table)`
  background: white;
  margin-top: 10px;
`;
