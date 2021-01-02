import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid #3a3b3c; */

  display: flex;
  flex-direction: column;

  max-width: 400px;
  border-radius: 8px;
  /* max-height: 600px; */

  text-align: justify;

  padding: 0 20px 30px;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;

    color: #ffb709;
    font-weight: bold;

    margin-top: 30px;
    margin-left: 10px;

    transition: color 0.2s;

    &:hover {
      color: #c48c04;
    }
  }

  > div {
    margin-top: 20px;

    padding: 0 10px;
    p {
      font-weight: 300;
      color: #b0b2b6;
      text-align: justify;
    }
  }
`;
