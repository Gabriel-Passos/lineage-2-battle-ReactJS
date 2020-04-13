import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import './style.css';

export default class FormRegister extends Component {
  render() {
    return (
      <div className="container-register">
        <div className="content-register">
          <form onSubmit={()=>{}}>
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar senha" />
            {/* <div className="radio-button-register">
              <input type="radio" />Eu aceito os <Link to="/register">termos de uso</Link>
            </div> */}
            <button type="submit">Submit</button>
          </form>
          <div className="links-register">
            <Link className="back-link-register" to="/">
              <FiArrowLeft className="arrow-left-register" size={16} color="#ffbb00"/> Voltar para home
            </Link>
            <Link className="foward-link-register" to="/login">
              Já possui uma conta? <FiArrowRight className="arrow-right-register" size={16} color="#ffbb00"/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
