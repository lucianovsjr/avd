import React from 'react';
import { Container } from 'react-bootstrap';

import { ButtonGoBack } from './styles';
import Form from '../../components/Form';

function Avaliacao({history, match}) {  
  return (
    <Container fluid="md">
      <ButtonGoBack onClick={() => history.goBack()} />
      <p>{match.params.id}</p>
      <Form />
    </Container>
  );
}

export default Avaliacao;
