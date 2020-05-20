import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerPersonagens = styled.section`
  max-width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const PersonagensHeader = styled.div`
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      max-width: 482px;
      height: 84px;

      font-family: Roboto, sans-serif;
      font-size: 36px;
      font-weight: bold;
      color: #3f3f44;
    }

    a{
      text-decoration: none;
    }
  }

  nav{
    margin-top: 50px;
    font-family: Roboto, sans-serif;
    color: #3f3f44;

    strong{
      font-size: 22px;
    }
    p{
      font-size: 18px;
      color: #d3d4d8;
    }
  }
`;

export const Personagens = styled.section`
  max-width: 860px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  margin-top: 80px;
  padding: 12px;
  border-radius: 5px;
  background-color: #d3d4d8;

  font-family: Roboto, sans-serif;
  color: #3f3f44;

  & + section{
    margin-top: 30px;
  }

  h1{
    font-size: 30px;
  }

  img{
    margin-right: 12px;
    max-width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      text-align: center;
    }
  }

  .img-online{
    width:25%;
    height:25%;
    margin: 0;
    margin-left:30%;
  }
`;

export const PersonagensItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    border: 0;
    border-radius: 5px;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    background-color: #e84545;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);

    &:hover{
      background-color: ${shade(0.1, '#e84545')};
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

