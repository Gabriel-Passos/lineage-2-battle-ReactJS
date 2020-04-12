import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import FormLogin from '../../components/FormLogin/FormLogin';

export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <FormLogin />
      </>
    );
  }
}
