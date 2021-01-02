import React from 'react';

import {
  RiTwitchFill,
  RiSpotifyFill,
  RiYoutubeFill,
  RiAppleFill,
  RiAmazonFill,
  RiDiscordFill,
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
    </Container>
  );
};

export default Footer;
