import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
