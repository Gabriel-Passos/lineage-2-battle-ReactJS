import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="container-login">
          <div className="content">
            <section>
              <form onSubmit="">
                <h3>Login</h3>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <div className="button-login">
                  <button type="submit">Entrar</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </>
    );
  }
}
