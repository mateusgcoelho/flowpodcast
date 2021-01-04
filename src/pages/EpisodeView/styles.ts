import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main``;

export const TopContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 60px;

  display: flex;

  align-items: flex-start;
  justify-content: space-around;

  img {
    width: 500px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;
`;

export const Comment = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Commentary = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    color: #b0b2b6;
  }

  div:first-child {
    display: flex;
    align-items: flex-start;
  }

  width: 100%;

  margin-top: 30px;
`;

export const Profile = styled.div`
  img {
    width: 60px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  margin-left: 20px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
      color: #b0b2b6;
    }
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
  }

  p {
    font-weight: 300;
    color: #b0b2b6;
    font-size: 16px;
  }
`;

export const CommentArea = styled.div`
  div.submit {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      margin-top: 20px;
      border: 0;
      outline: 0;
      background: #ffb709;
      /* border: 1px solid #ffb709; */
      color: #fff;
      font-weight: bold;
      padding: 15px 30px;
      border-radius: 8px;
      transition: color, background-color, 0.2s;

      &:hover {
        background: #c48c04;
      }
    }
  }

  div {
    span {
      padding: 10px;
    }

    margin-bottom: 20px;
  }

  h1 {
    font-weight: 300;
    color: #fff;
  }

  span {
    font-weight: 300;
    color: #b0b2b6;
  }

  textarea::placeholder {
    color: #b0b2b6;
  }

  textarea {
    color: #b0b2b6;

    width: 100%;

    outline: 0;
    border: 0;

    background: transparent;

    border: 1px solid #ffb709;
    border-radius: 8px;

    padding: 10px 20px;
    font-size: 16px;

    min-width: 100%;
    max-width: 100%;
    min-height: 80px;
    max-height: 130px;
  }
`;

export const CommentList = styled.div`
  margin: 50px auto;
  padding: 0 20px;
`;

export const Social = styled.div`
  margin-top: 40px;
  text-align: center;

  h2 {
    color: #ffb709;
    font-weight: 300;
  }

  div {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 20px;

    a {
      color: #b0b2b6;
      transition: color 0.2s;

      &:hover {
        color: #ffb709;
      }
    }
  }
`;
