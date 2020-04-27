/* eslint-disable no-unreachable */
import React from 'react';
import { Link } from 'react-router-dom'
import {FiAlignRight} from 'react-icons/fi';

// import logo from '../../assets/logo.png';

import './style.css';

export default function Header(){
  // function onNav(e){
  //   e.preventDefault();
  //   const menu = document.querySelector('.header-menu-mobile');
  //   menu.addEventListener('click').classList.toggle('open');
  // }

  return (
    <>
      <header>

        <div className="header-menu">
          <Link to="/" className="header-menu-mobile" ><FiAlignRight /></Link>
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