import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  ul li{
    list-style: none;
  }

  html{
    height: 62.5%;
  }

  body{
    font: 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea{
    font: 16px Roboto, sans-serif;
  }
`;

