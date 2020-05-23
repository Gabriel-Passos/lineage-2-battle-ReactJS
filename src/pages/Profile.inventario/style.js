import styled from 'styled-components';
import {shade} from 'polished';

export const ContainerInventario = styled.section`
  max-width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const InventarioHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    width: 482px;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration:none;
  }
`;

export const FormInventario = styled.form`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  input{
    width: 50%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    color: ${shade(0.4, '#ccc')};

    &::placeholder{
      color: #ccc;
    }
  }

  button{
    padding: 12px 18px;
    border: 1px solid #e84545;
    border-radius: 0 5px 5px 0;

    background-color: #e84545;

    svg{
      color: #fff;
    }

    &:hover{
      background-color: ${shade(0.2, '#e84545')};
    }
  }
`;

export const Personagens = styled.section`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 5px;
  background-color: #ccc;

  & + section{
    margin-top: 20px;
  }

  h1{
    font-size: 30px;
    flex: 1;
  }

  button{
    padding: 12px;
    margin: 3px;
    border: 0;
    border-radius: 5px;
    background-color: #e84545;
    color: #fff;
    font-weight: bold;

    &:hover{
      background-color: ${shade(0.2, '#e84545')};
    }
  }
`;
