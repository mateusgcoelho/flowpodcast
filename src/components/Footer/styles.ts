import styled from 'styled-components';

export const Container = styled.div`
  background: #000;

  border-top: 1px solid #1a1a1a;

  margin-top: 200px;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    ul {
      list-style: none;

      a {
        text-decoration: none;
        color: white;

        transition: color 0.2s;

        &:hover {
          color: #ffb709;
        }
      }
    }
  }

  div.socialmedia {
    a {
      color: #ffb709;

      transition: color 0.2s;

      &:hover {
        color: #b0b2b6;
      }
    }
  }

  div.contact {
    display: flex;
    align-items: center;
    img {
      width: 7rem;
    }

    p {
      color: #b0b2b6;
      font-size: 12px;
    }
  }
`;
