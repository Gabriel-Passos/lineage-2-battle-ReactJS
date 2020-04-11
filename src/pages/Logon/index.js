import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

export default class Logon extends Component {
  render() {
    return (
      <>
        <header className="">
          <nav className="menus">
            <div className="menu-principal">
              <ul className="link-menu">
                <li><Link className="" to="/">Home</Link></li>
                <li><Link className="" to="/register">Register</Link></li>
                <li><Link className="link-menu-login" to="/profile">Sign in</Link></li>
              </ul>
            </div>
            <div className="menu-secundario">
              <ul>
                <li><Link className="" to="/">Test</Link></li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  }
}