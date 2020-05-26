import React from 'react';
import { NavHeader } from './styles';

export default function Headers() { 
  return (
    <NavHeader>
      <NavHeader.Brand href="#home">Home</NavHeader.Brand>
      <NavHeader.Brand href="#painel">Painel</NavHeader.Brand>
      <NavHeader.Toggle />
      <NavHeader.Collapse className="justify-content-end">
        <NavHeader.Text>
          Fulano da Silva <a href="#sair">Sair</a>
        </NavHeader.Text>
      </NavHeader.Collapse>
    </NavHeader>
  );
}
