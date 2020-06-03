import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

import { TableHome, PaginationHome } from './styles';

function ListPagination({ quantidade }) {
  let active = 1;
  let items = [];
  let qtdPag = quantidade > 1 && quantidade % 1 > 0 ? quantidade + 1 : quantidade

  for (let number = 1; number <= qtdPag; number++) {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {avaliacoes.map(avaliacao => (
            <tr key={String(avaliacao.id)}>
              <td>{avaliacao.id}</td>
              <td>{avaliacao.name}</td>
              <td>{avaliacao.departamento}</td>
              <td>{avaliacao.cargo}</td>
              <td className="column-edit">
                <Link to={`/avaliacao/${avaliacao.id}`}>
                  <FaEdit size={25} />
                </Link>
              </td>
            </tr>
          ))}        
        </tbody>
      </TableHome>
    <ListPagination quantidade={avaliacoes.length/3}/>
    </>
  );
}
