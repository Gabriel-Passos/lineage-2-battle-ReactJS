import styled from 'styled-components';
import {shade} from 'polished';

import Background from '../../assets/images/background-perfil.jpg';

export const BODY = styled.body`
  background-image: url(${Background});
  background-size: cover;
  padding-top: 1%;
  padding-bottom: 1%;
`;

export const ConatinerProfile = styled.section`
  max-width: 860px;
  min-height:0 auto;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius:2%;
  z-index: 99;
`;

export const ProfileHeader = styled.div`
  div{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    color: #fff;

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

      background-color: #e84545;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);

      &:hover{
        background-color: ${shade(0.1, '#e84545')};
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const Menu = styled.section`
  margin-top: 80px;

  color: #fff;

  background-image: url("../../assets/images/background-perfil.png");
  background-size:100%;

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
    color: #fff;
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

    background-color: #e84545;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);

    color: #fff;
    font-family: Roboto, sans-serif;
    font-size:18px;

    border-radius: 5px;

    text-decoration: none;
    transition: transform 0.2s;

    &:hover{
      background-color: ${shade(0.1, '#e84545')};
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
      transform: translateX(5px);
    }
  }
`;
