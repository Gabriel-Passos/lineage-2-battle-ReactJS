import styled from 'styled-components';
import {shade} from 'polished';

export const ConatinerProfile = styled.section`
  max-width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 30px;
`;

export const ProfileHeader = styled.div`
  div{
    margin-top: 80px;
    display: flex;
    justify-content: space-between;

    img{
      max-width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    button{
      cursor: pointer;
      border: 0;
      border-radius: 50%;
    }

    h1{
      margin: 0 8px;
      max-width: 482px;
      height: 84px;

      font-family: Roboto, sans-serif;
      font-size: 36px;
      font-weight: bold;
    }

    a{
      display: block;
      height: 40px;

      display: flex;
      align-items: center;

      border: 0;
      border-radius: 5px;
      padding: 0 16px;

      font-family: Roboto, sans-serif;
      font-size: 18px;
      color: #fff;

      text-decoration: none;

      background-color: #0779e4;

      &:hover{
        background-color: ${shade(0.2, '#0779e4')};
      }
    }
  }
`;

export const Menu = styled.section`
  margin-top: 80px;

  h2{
    font-family: Roboto, sans-serif;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const ItensMenu = styled.div`
  margin-top: 30px;

  strong{
    width: 860px;

    font-family: Roboto, sans-serif;
    font-size: 30px;
    font-weight: 100;
  }

  a{
    margin-top: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 860px;
    padding: 12px;

    background-color: #0779e4;

    color: #fff;
    font-family: Roboto, sans-serif;
    font-size:18px;

    border-radius: 5px;

    text-decoration: none;
    transition: transform 0.2s;

    &:hover{
      background-color: ${shade(0.2, '#0779e4')};
      transform: translateX(5px);
    }
  }
`;
