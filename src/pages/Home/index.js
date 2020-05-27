import React from 'react';
import { Container, CardGroup } from 'react-bootstrap';
import { FaUserAlt, FaUserTimes, FaUserClock, FaUserEdit, FaUserCheck } from 'react-icons/fa';

import { CardHome } from './styles';

export default function Home() {
  return (
    <Container fluid="md">
      <CardGroup>
        <CardHome onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>Avaliações abertas</CardHome.Title>            
            <CardHome.Text>              
              <FaUserAlt size={32} color="#4CAF50" />
              <span>50</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome>
        <CardHome onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>Reprovadas</CardHome.Title>            
            <CardHome.Text>              
              <FaUserTimes size={32} color="#4CAF50" />
              <span>50</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome> 
        <CardHome onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>Em aprovação</CardHome.Title>            
            <CardHome.Text>              
              <FaUserClock size={32} color="#4CAF50" />
              <span>50</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome> 
        <CardHome onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>Avaliar</CardHome.Title>            
            <CardHome.Text>              
              <FaUserEdit size={32} color="#4CAF50" />
              <span>50</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome>
        <CardHome onClick={() => {console.log('teste');}}>
          <CardHome.Body>
            <CardHome.Title>Finalizadas</CardHome.Title>            
            <CardHome.Text>              
              <FaUserCheck size={32} color="#4CAF50" />
              <span>50</span>
            </CardHome.Text>
          </CardHome.Body>
        </CardHome> 
      </CardGroup>
    </Container>
  );
}
