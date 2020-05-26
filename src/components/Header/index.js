import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaWrench, FaSignInAlt } from 'react-icons/fa';

import { NavHeader, Link } from './styles';

export default function Headers() { 
  return (
    
      <NavHeader>
        <NavHeader.Brand href="#home">AVD</NavHeader.Brand>        
        <NavHeader.Toggle />
        <NavHeader.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Link><FaHome size={22} />Home</Link>
            <Link><FaWrench size={22} />Painel</Link>
          </Nav>
          <NavHeader.Text>Fulano da Silva</NavHeader.Text>
          <Link><FaSignInAlt size={28} /></Link>
        </NavHeader.Collapse>
      </NavHeader>
  );
}
