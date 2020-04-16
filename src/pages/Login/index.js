import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';

import './style.css';

export default function Login() {
  return (
    <div className="container-login">
      <div className="content-login">
        <form onSubmit={()=>{}}>
          <h1>Login</h1>
          <input type="email" placeholder="E-mail"/>
          <input type="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
        </form>
        <div className="links-login">
          <Link className="back-link-login" to="/">
            <FiArrowLeft className="arrow-left-login" size={16} color="#ffbb00" /> Voltar para home
          </Link>
          <Link className="foward-link-login" to="/register">
            Não possui uma conta? <FiArrowRight className="arrow-right-login" size={16} color="#ffbb00"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
