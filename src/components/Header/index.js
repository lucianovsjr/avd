import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

import { NavHeader, Link } from './styles';

export default function Headers() { 
  return (
      <NavHeader>
        <NavHeader.Brand href="#home">
          <FaHome size={32} color="#4CAF50" />
        </NavHeader.Brand>
        <Nav className="mr-auto">
          <Link> PAINEL </Link>
        </Nav>
        <NavHeader.Text>Fulano da Silva</NavHeader.Text>
        <Link><FaSignInAlt size={28} /></Link>
      </NavHeader>
  );
}
