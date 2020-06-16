import styled from 'styled-components';
import { Card, Table, Pagination, Spinner } from 'react-bootstrap';

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

  .column-edit {
    width: 70px;
  }

  svg {
    display: block;
    margin: auto;
    color: #1ab394;

    &:hover {
      cursor: pointer;
    }
  }
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

export const Loading = styled(Spinner).attrs({
  animation: 'border',
})`
  margin-top: 80px;
  width: 100px;
  height: 100px;
  color: #1ab394;
`;
