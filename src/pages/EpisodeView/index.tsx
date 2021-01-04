/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
  RiTwitchFill,
  RiSpotifyFill,
  RiYoutubeFill,
  RiAppleFill,
  RiAmazonFill,
  RiDiscordFill,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import MatueFlow from '../../assets/mateuflow.jpg';
import Monark from '../../assets/monark.jpg';
import Igor from '../../assets/igor.jpg';
import Gianzao from '../../assets/gianzao.jpg';

import Header from '../../components/Header';

import {
  Container,
  Main,
  TopContent,
  Description,
  Social,
  Comment,
  CommentArea,
  CommentList,
  Commentary,
  Profile,
  Info,
} from './styles';
import Footer from '../../components/Footer';

const EpisodeView: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <Main>
          <TopContent>
            <img src={MatueFlow} alt="Matue no Flow" />

            <Description>
              <h1>MATUÊ - Flow Podcast #264</h1>
              <p>
                Andam dizendo que o tuê é o demônio... Obs: ele chegou de corsa.
              </p>

              <Social>
                <h2>Assista/Ouça em:</h2>

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
              </Social>
            </Description>
          </TopContent>

          <Comment>
            <CommentArea>
              <div>
                <h1>Deixe seu comentário</h1>
                <span>
                  <strong>4</strong> comentários
                </span>
              </div>

              <div className="submit">
                <textarea placeholder="Adicione um comentário..." />
                <button>PUBLICAR</button>
              </div>
            </CommentArea>
            <CommentList>
              <Commentary>
                <div>
                  <Profile>
                    <img src={Igor} alt="Igor Profile" />
                  </Profile>

                  <Info>
                    <div>
                      <h2>Igor 3Caralhos</h2>
                      <RiCheckboxCircleFill size={20} />
                    </div>
                    <p>Mas é real esse bagulho ai mermo??</p>
                  </Info>
                </div>

                <p>há poucos segundos</p>
              </Commentary>
              <Commentary>
                <div>
                  <Profile>
                    <img src={Gianzao} alt="Gianzão Profile" />
                  </Profile>

                  <Info>
                    <div>
                      <h2>Gianzão</h2>
                      <RiCheckboxCircleFill size={20} />
                    </div>
                    <p>Você é legal matuê, mas eu amo o froid.</p>
                  </Info>
                </div>

                <p>há 20 minutos</p>
              </Commentary>
              <Commentary>
                <div>
                  <Profile>
                    <img src={Monark} alt="Monark Profile" />
                  </Profile>

                  <Info>
                    <div>
                      <h2>Monark</h2>
                      <RiCheckboxCircleFill size={20} />
                    </div>
                    <p>O elon musk disse isso ai!</p>
                  </Info>
                </div>

                <p>há 3 horas</p>
              </Commentary>
              <Commentary>
                <div>
                  <Profile>
                    <img src={Monark} alt="Monark Profile" />
                  </Profile>

                  <Info>
                    <div>
                      <h2>Monark</h2>
                      <RiCheckboxCircleFill size={20} />
                    </div>
                    <p>AwwwwAwwwwww awwwwww eu discordo!</p>
                  </Info>
                </div>

                <p>há 3 horas</p>
              </Commentary>
            </CommentList>
          </Comment>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default EpisodeView;
