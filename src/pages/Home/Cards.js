import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { FaUserAlt, FaUserTimes, FaUserClock, FaUserEdit, FaUserCheck, FaUserCircle } from 'react-icons/fa';

import { CardHome } from './styles';


function CardIcon({ icon }) {
  switch(icon) {
    case 'FaUserAlt':
      return <FaUserAlt size={32} />;
    case 'FaUserTimes':
      return <FaUserTimes size={32} />;
    case 'FaUserClock':
      return <FaUserClock size={32} />;
    case 'FaUserEdit':      
      return <FaUserEdit size={32} />;
    case 'FaUserCheck':
      return <FaUserCheck size={32} />;
    default:
      return <FaUserCircle size={32} />;
  };
}

export default function Cards({ cards }) {
  return (
    <CardGroup>
      { cards.map(card => (
        <CardHome key={card.title} active={card.active} onClick={card.funcSelect}>
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
