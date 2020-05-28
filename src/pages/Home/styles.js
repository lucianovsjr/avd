import styled from 'styled-components';
import { Card, Table, Pagination } from 'react-bootstrap';

export const CardHome = styled(Card)`
  ${props => (
   props.active &&
    'background-color: #1ab394; color: #fff;'
  )}  
  
  &:hover {
    cursor: pointer;
  }

  svg { 
    ${props => (
      props.active ?
      'color: white;'
      : 'color: #1ab394;'
    )}    
    margin: 0 40px 0 20px;
  }
`;

export const TableHome = styled(Table)`
  background: white;
  margin-top: 10px;
`;

export const PaginationHome = styled(Pagination)`
  .page-link {
    color: #1ab394;
  }

  .page-item.active .page-link {
    background-color: #1ab394;
    border-color: #1ab394;
  }
`;