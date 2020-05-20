import styled from 'styled-components';

export const CointainerBoss = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 30px 20px;

  font-family: Roboto, sans-serif;
  color: #3f3f44;
`;

export const BossHeader = styled.div`
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      width: 482px;
    }

    a{
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  }

  nav{
    margin-top: 50px;

    strong{
      font-size: 22px;
    }
    p{
      font-size: 18px;
      color: #d3d4d8;
    }
  }
`;

export const Bosses = styled.section`
  margin-top: 80px;
  border-radius: 5px;

  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    background-color: #d3d4d8;
    padding: 10px;

    border-radius: 5px;

    img{
      max-width: 150px;
      height: auto;
      border-radius: 5px;
    }

    h1{
      font-size: 25px;
    }

    @media (max-width: 550px){
      h1{
        margin-top: 10px;
      }
    }
  }

  & + section{
    margin-top: 30px;
  }
`;

export const InfoBosses = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div{
    strong{
      font-size: 18px;
    }

    p{
      font-size: 15px;
      text-align: center;
    }
  }

  strong{
    font-size: 18px;
  }

  span{
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: 550px){
    div{
      margin-top: 10px;
    }
  }
`;
