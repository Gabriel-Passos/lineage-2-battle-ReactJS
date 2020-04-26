import React from 'react';
import { Link } from 'react-router-dom'
import {FiAlignRight} from 'react-icons/fi';

// import logo from '../../assets/logo.png';

import './style.css';

export default function Header(){
  return (
    <>
      <header>

      <div className="header-menu header-menu-mobile">
        <Link to="/"><FiAlignRight /></Link>
      </div>

        <nav className="container-header">
          <div className="header-menu">
            <div className="header-button">
              <li><Link to="/profile">Downloads</Link></li>
            </div>
            <div className="header-button">
              <li><Link to="/login">Sign in</Link></li>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}