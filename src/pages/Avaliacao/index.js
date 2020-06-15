import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import { ButtonGoBack, Header, Form } from './styles';

function Avaliacao({history, match}) {  
  const [avaliacao, setAvaliacao] = useState({});

  useEffect(
    () => {
      setAvaliacao({
        nome: 'João pereira da Silva Filho'
      });
    }, []
  );
  
  return (
    <Container fluid="md">
      <Header>
        <ButtonGoBack onClick={() => history.goBack()} />
        <p>{match.params.id} {avaliacao.nome}</p>        
      </Header>
      <div>
        <Form>
          <thead>
            <tr>
              <td>Grupo 1</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>teste</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>teste</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
          </tbody>
        </Form>
      </div>
    </Container>
  );
}

export default Avaliacao;
