import styled from 'styled-components';

export const ContainerPersonagens = styled.section`
  max-width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
`;

export const PersonagensHeader = styled.div`


  h1{
    margin-top: 80px;
    max-width: 482px;
    height: 84px;

    font-family: Roboto, sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #3f3f44;
  }

  div{
    margin-top: 40px;
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
  padding: 12px;
  border-radius: 5px;
  background-color: #d3d4d8;

  font-family: Roboto, sans-serif;
  color: #3f3f44;

  h1{
    font-size: 30px;
  }

  div{
    max-width: 860px;
    padding: 4px;
  }

  button{
    width: 60px;
    height: 40px;

    border: 0;
  }

  hr{
    margin-left: 60px;
  }

  img{
    margin-right: 12px;
    max-width: 80px;
    height: 80px;
  }
`;

export const PersonagensItem = styled.section`
  display: flex;
  flex-wrap: wrap;

  font-family: Roboto, sans-serif;
  margin: 0 auto;

  strong{
    margin-left: 60px;
    font-size: 18px;
  }

  p{
    margin-left: 60px;
    text-align: center;
  }
`;
