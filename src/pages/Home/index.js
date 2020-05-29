import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import produce from 'immer';

import api from '../../services/api';
import { Loading } from './styles'
import Cards from './Cards';
import List from './List';

export default class Home extends Component {
  state = {
    loading: true,
    cards: [
      {
        id: 0,
        active: false,
        title: 'Abertas',
        icon: 'FaUserAlt',
        total: 0,
        avaliacoes: [],
        funcSelect: () => this.handleSelectCard(0),
      },
      {
        id: 1,
        active: false,
        title: 'Aprovar',
        icon: 'FaUserEdit',
        total: 0,
        avaliacoes: [],
        funcSelect: () => this.handleSelectCard(1),
      },
      {
        id: 2,
        active: false,
        title: 'Reprovadas',
        icon: 'FaUserTimes',
        total: 0,
        avaliacoes: [],
        funcSelect: () => this.handleSelectCard(2),
      },
      {
        id: 3,
        active: false,
        title: 'Em aprovação',
        icon: 'FaUserClock',
        total: 0,
        avaliacoes: [],
        funcSelect: () => this.handleSelectCard(3),
      },      
      {
        id: 4,
        active: false,
        title: 'Finalizadas',
        icon: 'FaUserCheck',
        total: 0,
        avaliacoes: [],
        funcSelect: () => this.handleSelectCard(4),
      }
    ],
  };

  async componentDidMount() {
    const [respAbertas, respAprovar, respRepovadas, respEmAprovacao, respFinalizadas] = await Promise.all([
      api.get('/avaliacoes_abertas/'),
      api.get('/avaliacoes_aprovar/'),
      api.get('/avaliacoes_reprovadas/'),
      api.get('/avaliacoes_em_aprovacao/'),
      api.get('/avaliacoes_finalizadas/')
    ]);

    this.setState({
      cards: produce(this.state.cards, draftState => {
        let total = 0;

        draftState.map(card => {
          switch(card.id) {
            case 0:
              card.total = respAbertas.data.length;
              card.avaliacoes = respAbertas.data;
              break;
            case 1:
              card.total = respAprovar.data.length;
              card.avaliacoes = respAprovar.data;
              break;
            case 2:
              card.total = respRepovadas.data.length;
              card.avaliacoes = respRepovadas.data;
              break;
            case 3:
              card.total = respEmAprovacao.data.length;
              card.avaliacoes = respEmAprovacao.data;
              break;
            case 4:
              card.total = respFinalizadas.data.length;
              card.avaliacoes = respFinalizadas.data;
              break;
            default:              
              card.total = 0;
              card.avaliacoes = [];
          }
          
          // Exibir o total
          if (card.total > total) {
            card.active = true;
            total = card.total;
          }

          return card;
        })
      }),       
      loading: false,
    });
  }

  handleSelectCard(id) {
    this.setState({
      cards: produce(this.state.cards, draftState => {
        draftState.map(card => {
          card.active = card.id === id ? true : false

          return card;
        });
      }),
    });
  }

  render()  {
    const { cards, loading } = this.state;

    const cardCurrent = cards.filter(card => card.active === true);
    const avaliacoes = cardCurrent.length > 0 ? cardCurrent[0].avaliacoes :[];

    return (
      <Container fluid="md">
        <Cards cards={cards}/>
        { loading
          ? <div class="d-flex justify-content-center"><Loading /></div>
          : <List avaliacoes={avaliacoes}/>
        }
      </Container>
    );
  }  
}
