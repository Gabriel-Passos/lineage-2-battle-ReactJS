import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';

export default class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="container-login">
          <div className="content">
            <form onSubmit="">
              <h3>Login</h3>
              <input type="email" placeholder="E-mail"/>
              <input type="password" placeholder="Senha"/>
              <button type="submit">Entrar</button>
              <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#ffbb00" />
                Voltar para home
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}
