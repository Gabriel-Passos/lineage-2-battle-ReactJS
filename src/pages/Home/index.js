import React from 'react';

import Header from '../../components/Header/Header';
import PLayNow from '../../components/PLayNow/PlayNow';

import './style.css';

export default function Home(){
  return (
    <>
    <Header />
    <body className="bodyHome">
      <PLayNow />
    </body>
    </>
  );
}
