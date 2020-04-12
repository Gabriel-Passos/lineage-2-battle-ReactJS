import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import PLayNow from '../../components/PLayNow/PlayNow';

import './style.css';

export default class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <PLayNow />
      </>
    );
  }
}
