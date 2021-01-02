import styled from 'styled-components';

import BackgroundSlide from '../../assets/flow-slide1.jpg';

export const Container = styled.div``;

export const ButtonsLinks = styled.a``;

export const Main = styled.main``;

export const TopContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
`;

export const Description = styled.div`
  max-width: 900px;
  margin: 40px auto;

  text-align: center;

  h1 {
    font-weight: bolder;
    font-size: 30px;
  }

  h2 {
    margin-bottom: 40px;

    font-weight: 200;
    color: #ffb709;
  }

  p {
    font-size: 20px;
    font-weight: 300;

    text-align: justify;
  }

  > div {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      text-decoration: none;

      color: #ffb709;
      transition: color 0.2s;

      &:hover {
        color: #3a3b3c;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${BackgroundSlide}) center no-repeat;
  background-size: cover;

  height: 200px;
  width: 100%;
`;

export const MidContent = styled.div``;
