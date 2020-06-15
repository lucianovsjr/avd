import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { useImmer } from 'use-immer';

import api from '../../services/api';
import { Loading } from './styles'
import Cards from './Cards';
import List from './List';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cards, updateCards] = useImmer([
    {
      id: 0,
      active: true,
      title: 'Abertas',
      icon: 'FaUserAlt',
      total: 0,
      avaliacoes: [],
      funcSelect: () => handleSelectCard(0),
    },
    {
      id: 1,
      active: false,
      title: 'Aprovar',
      icon: 'FaUserEdit',
      total: 0,
      avaliacoes: [],
      funcSelect: () => handleSelectCard(1),
    },
    {
      id: 2,
      active: false,
      title: 'Reprovadas',
      icon: 'FaUserTimes',
      total: 0,
      avaliacoes: [],
      funcSelect: () => handleSelectCard(2),
    },
    {
      id: 3,
      active: false,
      title: 'Em aprovação',
      icon: 'FaUserClock',
      total: 0,
      avaliacoes: [],
      funcSelect: () => handleSelectCard(3),
    },
    {
      id: 4,
      active: false,
      title: 'Finalizadas',
      icon: 'FaUserCheck',
      total: 0,
      avaliacoes: [],
      funcSelect: () => handleSelectCard(4),
    }
  ]);

  const cardCurrent = useMemo(() => cards.filter(card => card.active === true), [cards]);
  const avaliacaoCurrent = useMemo(() => cardCurrent.length > 0 ? cardCurrent[0].avaliacoes : [], [cardCurrent]);

  function updateCard(id, total, data) {
    updateCards(draft =>
      draft.map(
        card => card.id === id
        ? {...card, total: total, avaliacoes: data}
        : card
      )
    );
  }

  function updateCardActive(id) {
    updateCards(draft =>
      draft.map(
        card => card.id === id
        ? {...card, active: true}
        : {...card, active: false}
      )
    );
  }

  useEffect(() => {
    async function loadCards() {
      setLoading(true);

      const [respAbertas, respAprovar, respRepovadas, respEmAprovacao, respFinalizadas] = await Promise.all([
        api.get('/avaliacoes_abertas/'),
        api.get('/avaliacoes_aprovar/'),
        api.get('/avaliacoes_reprovadas/'),
        api.get('/avaliacoes_em_aprovacao/'),
        api.get('/avaliacoes_finalizadas/')
      ]);

      updateCard(0, respAbertas.data.length, respAbertas.data);
      updateCard(1, respAprovar.data.length, respAprovar.data);
      updateCard(2, respRepovadas.data.length, respRepovadas.data);
      updateCard(3, respEmAprovacao.data.length, respEmAprovacao.data);
      updateCard(4, respFinalizadas.data.length, respFinalizadas.data);

      setLoading(false);
    }

    loadCards();
  }, []);

  function handleSelectCard(id) {
    updateCardActive(id)
  }

  return (
    <Container fluid="md">
      <Cards cards={cards}/>
      { loading
        ? <div className="d-flex justify-content-center"><Loading /></div>
        : <List avaliacoes={avaliacaoCurrent}/>
      }
    </Container>
  );
}
