import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';

import './style.css';

export default function Header(){
  return (
    <>
      <header>
        <div className="container-header">
          <Link className="logo-img" to="/"><img src={logo} alt="Logo Lineage 2 Battle"/></Link>
          <div className="menu-principal">
            <li><Link className="" to="/">Home</Link></li>
            <li><Link className="" to="/">Informação</Link></li>
            <li><Link className="link-menu-login" to="/register">Cadastro</Link></li>
            <li><Link className="link-menu-login" to="/">Contato</Link></li>
            <li><Link className="link-menu-login" to="/">Doação</Link></li>
            <li><Link className="link-menu-login" to="/">História</Link></li>
            <li><Link className="link-menu-login" to="/">Classes</Link></li>
          </div>
          <div className="menu-users">
            <div className="button">
              <li><Link to="/profile">Downloads</Link></li>
            </div>
            <div className="button">
              <li><Link to="/login">Sign in</Link></li>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}