import styled from 'styled-components';

export const Container = styled.header`
  background: #000;

  border-bottom: 1px solid #1a1a1a;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  /* max-width: 1300px; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 5rem;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: block;
    border-radius: 8px;
    padding: 10px 13px;
    margin: 2px 0;
    color: #b0b2b6;

    transition: color, background-color, 0.2s;
    background: #3a3b3c;

    border-radius: 50%;

    &:hover {
      color: #fff;
      background: #525455;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: 700px;

  margin: 0 auto;

  a.here {
    border-radius: 0;
    margin: 0;

    border-bottom: 3px solid #ffb709;

    svg {
      color: #ffb709;
    }

    &:hover {
      color: #ffb709;
      background: none;
    }
  }

  a {
    border-radius: 8px;
    padding: 15px 50px;
    margin: 4px 0;
    color: #b0b2b6;

    transition: color 0.2s;

    &:hover {
      color: #ffb709;
      background: #3a3b3c;
    }
  }
`;
