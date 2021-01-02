import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  RiHomeLine,
  RiShoppingBagLine,
  RiTv2Line,
  RiLoginBoxLine,
  RiStickyNoteLine,
  RiGiftLine,
  RiUserStarLine,
} from 'react-icons/ri';

import FlowLogo from '../../assets/FlowLogo.png';

import { Container, HeaderWrapper, Navigation, LoginWrapper } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <HeaderWrapper>
        <img src={FlowLogo} alt="Logo FlowPodcast" />

        <Navigation>
          <Link
            title="Início"
            className={location.pathname === '/' ? 'here' : ''}
            to="/"
          >
            <RiHomeLine size={23} />
          </Link>
          <Link title="Loja" to="/">
            <RiShoppingBagLine size={23} />
          </Link>
          <Link title="Episódios" to="/">
            <RiTv2Line size={23} />
          </Link>
          <Link title="Contato" to="/">
            <RiUserStarLine size={23} />
          </Link>
          <Link title="Membros" to="/">
            <RiGiftLine size={23} />
          </Link>
          <Link title="Patch Notes" to="/">
            <RiStickyNoteLine size={23} />
          </Link>
        </Navigation>

        <LoginWrapper>
          <Link title="Entrar/Cadastrar" to="/">
            <RiLoginBoxLine size={23} />
          </Link>
        </LoginWrapper>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
