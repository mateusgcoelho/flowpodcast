import React from 'react';

import {
  RiTwitchFill,
  RiSpotifyFill,
  RiYoutubeFill,
  RiAppleFill,
  RiAmazonFill,
  RiDiscordFill,
} from 'react-icons/ri';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import {
  Container,
  Main,
  Background,
  TopContent,
  MidContent,
  Description,
  Divisor,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Main>
        <TopContent>
          <Background />

          <Description>
            <h1>VOLTAREMOS DIA 11/01/2021 DE SEGUNDA A SEXTA ÀS 20H</h1>
            <h2>(às vezes o horário muda, quase sempre atrasa)</h2>

            <p>
              Flow Podcast é uma conversa descontraída, longa e livre, como um
              papo de boteco entre amigos. Garantimos um espaço onde o convidado
              pode desenvolver suas ideias sem qualquer tipo de pauta ou as
              restrições normais de outras mídias, como agenda
              política/filosófica.
            </p>

            <div>
              <a href="#">
                <RiTwitchFill size={30} />
              </a>
              <a href="#">
                <RiSpotifyFill size={30} />
              </a>
              <a href="">
                <RiYoutubeFill size={30} />
              </a>
              <a href="">
                <RiAppleFill size={30} />
              </a>
              <a href="">
                <RiDiscordFill size={30} />
              </a>
              <a href="">
                <RiAmazonFill size={30} />
              </a>
            </div>
          </Description>
        </TopContent>

        <Divisor />

        <MidContent>
          <div className="descMid">
            <h1>Caso tenha Perdido</h1>
            <h2>OUÇA NOSSOS EPISÓDIOS</h2>
          </div>

          <div className="cards">
            <Card />
            <Card />
          </div>
        </MidContent>
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
