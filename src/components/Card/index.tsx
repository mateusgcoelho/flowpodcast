import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import MatueFlow from '../../assets/mateuflow.jpg';

const Card: React.FC = () => {
  return (
    <Container>
      <a href="">
        <img src={MatueFlow} alt="Matue no Flow" />
      </a>

      <div>
        <h2>MATUÊ - Flow Podcast #264</h2>
        <p>Andam dizendo que o tuê é o demônio... Obs: ele chegou de corsa.</p>
      </div>

      <a href="/episodes/matue">VER MAIS</a>
    </Container>
  );
};

export default Card;
