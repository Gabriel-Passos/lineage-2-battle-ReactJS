import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <Link className="logo-img" to="/"><img src={logo} alt="Logo Lineage 2 Battle"/></Link>
          <nav>
            <div className="menu-principal">
              <li><Link className="" to="/">Home</Link></li>
              <li><Link className="" to="/register">Informação</Link></li>
              <li><Link className="link-menu-login" to="/profile">Cadastro</Link></li>
              <li><Link className="link-menu-login" to="/profile">Contato</Link></li>
              <li><Link className="link-menu-login" to="/profile">Doação</Link></li>
              <li><Link className="link-menu-login" to="/profile">História</Link></li>
              <li><Link className="link-menu-login" to="/profile">Classes</Link></li>
            </div>
          </nav>
          <div className="menu-users">
            <div className="button">
              <li><Link to="/profile">Downloads</Link></li>
            </div>
            <div className="button">
              <li><Link to="/login">Sign in</Link></li>
            </div>
          </div>
        </header>
      </>
    )
  }
}