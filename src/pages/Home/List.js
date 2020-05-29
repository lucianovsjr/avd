import React from 'react';

import { TableHome, PaginationHome } from './styles';

function ListPagination({ quantidade }) {
  let active = 1;
  let items = [];

  for (let number = 1; number <= quantidade; number++) {
    items.push(
      <PaginationHome.Item key={number} active={number === active}>
        {number}
      </PaginationHome.Item>,
    );
  }

  return (
    <div className="d-flex flex-row-reverse">
      <PaginationHome size="sm">
        {items}
      </PaginationHome>
    </div>
  );
}

export default function List({ avaliacoes }) {
  return (
    <>
      <TableHome striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Departamento</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {avaliacoes.map(avaliacao => (
            <tr key={String(avaliacao.id)}>
              <td>{avaliacao.id}</td>
              <td>{avaliacao.name}</td>
              <td>{avaliacao.departamento}</td>
              <td>{avaliacao.cargo}</td>
            </tr>
          ))}        
        </tbody>
      </TableHome>
    <ListPagination quantidade={6}/>
    </>
  );
}
