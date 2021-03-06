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
    h1 {
      font-size: 16px;
    }
    ul {
      list-style: none;
      padding: 5px 10px;

      a {
        font-weight: 300;
        color: #b0b2b6;
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

      & + a {
        margin-left: 8px;
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
