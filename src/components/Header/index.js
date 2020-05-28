import React from 'react';
import { Nav, Form } from 'react-bootstrap';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

import { NavHeader, Link, FormYear } from './styles';

export default function Headers() { 
  return (
      <NavHeader>
        <NavHeader.Brand href="#home" className="col-auto">
          <FaHome size={32} color="#1ab394" />
        </NavHeader.Brand>

        <Nav className="col-auto mr-auto">
          <Nav.Item><Link>PAINEL</Link></Nav.Item>          
        </Nav>

        <FormYear className="col-auto">
          <Form.Control as="select" size="md" custom>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
          </Form.Control>
        </FormYear>
        
        
        <NavHeader.Text className="col-auto">Fulano da Silva</NavHeader.Text>
        <Link className="col-auto"><FaSignInAlt size={28} /></Link>
      </NavHeader>
  );
}
