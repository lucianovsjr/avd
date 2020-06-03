import React from 'react';
import { Nav, Form, InputGroup } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaRegCalendarAlt } from 'react-icons/fa';

import { NavHeader, Link, FormYear } from './styles';

export default function Headers() { 
  return (
      <NavHeader>
        <NavHeader.Brand href="/" className="col-auto">
          <FaHome size={32} color="#1ab394" />
        </NavHeader.Brand>

        <Nav className="col-auto mr-auto">
          <Nav.Item><Link href="/configurador">CONFIGURADOR</Link></Nav.Item>          
        </Nav>
        
        <div className="ml-auto">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaRegCalendarAlt />
              </InputGroup.Text>
            </InputGroup.Prepend>          
            <FormYear>          
              <Form.Control as="select" size="md" custom>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </Form.Control>
            </FormYear>
          </InputGroup>
        </div>
        
        <NavHeader.Text className="col-auto">Fulano da Silva</NavHeader.Text>
        <Link className="col-auto"><FaSignInAlt size={28} /></Link>
      </NavHeader>
  );
}
