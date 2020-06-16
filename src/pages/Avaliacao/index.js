import React, { useState, useEffect } from 'react';
import { Container, OverlayTrigger } from 'react-bootstrap';

import api from '../../services/api';

import {
  ButtonGoBack,
  ButtonSave,
  ButtonEnviar,
  ButtonHistorico,
  Header,
  HeaderColaborador,
  HeaderButtons,
  FormAvaliacao,
  TableAvaliacao,
  Tooltip
} from './styles';

function FormTooltip({ children, text }) {
  return (
  <OverlayTrigger
    overlay={
      <Tooltip>
        {text}
      </Tooltip>
    }
  >
    {children}
  </OverlayTrigger>
  );
}

function Avaliacao({history, match}) {
  const [avaliacao, setAvaliacao] = useState({});

  useEffect(() => {
      async function loadAvaliacao() {
        try {
          const response = await api.get(`avaliacoes_abertas/${match.params.id}`)

          setAvaliacao(response.data);
        } catch (error) {
          alert('error');
        }
      }

      loadAvaliacao();
    }, []
  );

  return (
    <Container fluid="md">
      <Header>
        <HeaderButtons>
          <FormTooltip text="Voltar">
            <ButtonGoBack onClick={() => history.goBack()} />
          </FormTooltip>
          <FormTooltip text="Salvar">
            <ButtonSave />
          </FormTooltip>
          <FormTooltip text="Enviar para aprovação">
            <ButtonEnviar />
          </FormTooltip>
          <FormTooltip text="Histórico">
            <ButtonHistorico />
          </FormTooltip>
        </HeaderButtons>

        <HeaderColaborador>
          <span className="nome">{avaliacao.name}</span>
          <span className="departamento">{avaliacao.departamento}</span>
          <span className="cargo">{avaliacao.cargo}</span>
        </HeaderColaborador>

        <HeaderColaborador>
          <span className="nome">Alexandre Lucio dos Santos</span>
          <span className="nome">Werisson</span>
        </HeaderColaborador>
      </Header>
      <div>
        <FormAvaliacao>
          <TableAvaliacao>
            <thead>
              <tr>
                <th></th>
                <th>DOMINIO TÉNICO</th>
                <FormTooltip text="Baixo desempenho">
                  <th>1</th>
                </FormTooltip>
                <FormTooltip text="Requer desenvolvimento">
                  <th>2</th>
                </FormTooltip>
                <FormTooltip text="Desempenho adequado">
                  <th>3</th>
                </FormTooltip>
                <FormTooltip text="Alto desempenho">
                  <th>4</th>
                </FormTooltip>
                <FormTooltip text="Supera expectativas">
                  <th>5</th>
                </FormTooltip>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Possui conhecimento específico e habilidade para o exercício de suas tarefas?</td>
                <td>
                  <FormAvaliacao.Check aria-label="option1" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option1" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option1" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option1" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option1" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Identifica previamente anormalidades e toma ações rápidas e corretas nas questões que envolvam seu trabalho?</td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Preocupa-se em deixar suas demandas do dia atualizadas para o colega do turno seguinte ou na cobertura de férias?</td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
                <td>
                  <FormAvaliacao.Check aria-label="option2" />
                </td>
              </tr>
            </tbody>
          </TableAvaliacao>
        </FormAvaliacao>
      </div>
    </Container>
  );
}

export default Avaliacao;
