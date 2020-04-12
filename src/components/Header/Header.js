import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="">
          <nav className="menus">
            <Link className="logo-img" to="/"><img src={logo} alt="Logo Lineage 2 Battle"/></Link>
            <div className="menu-principal">
              <li><Link className="" to="/">Home</Link></li>
              <li><Link className="" to="/register">Register</Link></li>
              <li><Link className="link-menu-login" to="/profile">Sign in</Link></li>
            </div>
            <div className="menu-secundario">
              <li><Link className="button" to="/login">Sign in</Link></li>
            </div>
          </nav>
        </header>
      </>
    )
  }
}