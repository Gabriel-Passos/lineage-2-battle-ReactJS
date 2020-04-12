import React, { Component } from 'react';

import './style.css';

export default class FormLogin extends Component {
  render() {
    return (
      <>
        <section className="container-login">
          <form action="">
            <h3>Login</h3>
            <input type="email" placeholder="E-mail"/>
            <input type="password" placeholder="Senha"/>
            <button type="submit">Entrar</button>
          </form>
        </section>
      </>
    );
  }
}
