import React, { Component } from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import { FaUserAlt, FaUserTimes, FaUserClock, FaUserEdit, FaUserCheck, FaUserCircle } from 'react-icons/fa';

import { CardHome, TableHome } from './styles';

function CardIcon({ icon }) {
  switch(icon) {
    case 'FaUserAlt':
      return <FaUserAlt size={32} color="#4CAF50" />;
    case 'FaUserTimes':
      return <FaUserTimes size={32} color="#4CAF50" />;
    case 'FaUserClock':
      return <FaUserClock size={32} color="#4CAF50" />;
    case 'FaUserEdit':      
      return <FaUserEdit size={32} color="#4CAF50" />;
    case 'FaUserCheck':
      return <FaUserCheck size={32} color="#4CAF50" />;
    default:
      return <FaUserCircle size={32} color="#4CAF50" />;
  };
}

function Cards({ cards }) {
  return (
    <CardGroup>
      { cards.map(card => (
        <CardHome key={card.title} onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>{card.title}</CardHome.Title>            
            <CardHome.Text>
              <CardIcon icon={card.icon}/>
              <span>{card.total}</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome>
      )) }      
    </CardGroup>
  );
}

function List({ colaboradores }) {
  return (
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
        {colaboradores.map(colaborador => (
          <tr key={String(colaborador.id)}>
            <td>{colaborador.id}</td>
            <td>{colaborador.name}</td>
            <td>{colaborador.departamento}</td>
            <td>{colaborador.cargo}</td>
          </tr>
        ))}        
      </tbody>
    </TableHome>
  );
}

export default class Home extends Component {
  state = {
    cards: [
      {
        title: 'Avaliações abertas',
        icon: 'FaUserAlt',
        total: 14,
      },
      {
        title: 'Reprovados',
        icon: 'FaUserTimes',
        total: 1,
      },
      {
        title: 'Em aprovação',
        icon: 'FaUserClock',
        total: 3,
      },
      {
        title: 'Avaliar',
        icon: 'FaUserEdit',
        total: 0,
      },
      {
        title: 'Finalizadas',
        icon: 'FaUserCheck',
        total: 2,
      }
    ],
    colaboradores: [
      {
        id: 1,
        name: 'João da Silva',
        departamento: 'Informática',
        cargo: 'Técnico'
      },
      {
        id: 2,
        name: 'Fulano Pereira',
        departamento: 'Informática',
        cargo: 'Analista'
      }
    ],
  };
  render()  {
    const { cards, colaboradores } = this.state;

    return (    
      <Container fluid="md">
        <Cards cards={cards}/>
        <List colaboradores={colaboradores}/>
      </Container>
    );
  }  
}
