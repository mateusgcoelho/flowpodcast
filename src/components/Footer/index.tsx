import React from 'react';

import {
  RiTwitchFill,
  RiSpotifyFill,
  RiYoutubeFill,
  RiAppleFill,
  RiInstagramFill,
  RiDiscordFill,
  RiFacebookFill,
} from 'react-icons/ri';

import FlowLogo from '../../assets/FlowLogo.png';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="contact">
        <img src={FlowLogo} alt="Logo Flow" />
        <div className="cop">
          <p>Copyright Flow Podcast - 2021. Todos os direitos reservados.</p>
          <p>Contato: contato@flowpodcast.com.br</p>
        </div>
      </div>

      <nav>
        <h1>NAVEGAÇÃO</h1>
        <ul>
          <a href="">
            <li>Inicio</li>
          </a>
          <a href="">
            <li>Episodios</li>
          </a>
          <a href="">
            <li>Contato</li>
          </a>
          <a href="">
            <li>Membros</li>
          </a>
          <a href="">
            <li>Patch Notes</li>
          </a>
        </ul>
      </nav>

      <div className="socialmedia">
        <a href="#">
          <RiTwitchFill size={27} />
        </a>
        <a href="">
          <RiYoutubeFill size={27} />
        </a>
        <a href="">
          <RiDiscordFill size={27} />
        </a>
        <a href="">
          <RiFacebookFill size={27} />
        </a>
        <a href="">
          <RiInstagramFill size={27} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
