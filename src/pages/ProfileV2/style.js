import styled from 'styled-components';
import {shade} from 'polished';

import ImgBackground from '../../assets/images/bg-profile.jpg';

export const ConatinerProfile = styled.section`
  /* background-image: url(${ImgBackground});
  background-size: cover;
  background-repeat: no-repeat; */

  height: 100vh;

  overflow: scroll;
  overflow-x: hidden;

  section{
    max-width: 860px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

export const Header = styled.div`
  div{
    display: flex;
    justify-content: space-between;

    h1{
      max-width: 482px;
      height: 84px;

      font-family: Roboto, sans-serif;
      font-size: 36px;
      font-weight: bold;
    }

    button{
      height: 40px;

      border: 0;
      border-radius: 5px;
      padding: 0 16px;

      font-family: Roboto, sans-serif;
      font-size: 18px;
      text-align: center;
      color: #fff;

      background-color: #0779e4;

      &:hover{
        background-color: ${shade(0.2, '#0779e4')};
      }
    }
  }
`;

export const PictureProfile = styled.div`
  img{
    margin-top: 50px;
    max-width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  a{
    display: block;
    margin-top: 5px;
    margin-bottom: 40px;
    padding: 15px;

    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #0779e4;

    text-decoration: none;

    &:hover{
      color: ${shade(0.2, '#0779e4')};
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

    &:hover{
      background-color: ${shade(0.2, '#0779e4')};
    }
  }
`;
