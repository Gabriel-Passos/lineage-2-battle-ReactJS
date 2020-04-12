import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import logo from '../assets/logo.png';

const StyledHeader = styled.header`
  background-color: rgb(255, 255, 255, 0.3);
  .logo-img img{
    max-width: 80px;
    height: auto;
    margin: 8px;
  }
  .menus{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .menus a{
    font-size: 20px;
    font-weight: bold;
  }
  .menu-principal a{
    color: #000000;    
  }
  .menu-principal a:hover{
  color: #ffbb00;
  }
  .menu-principal li{
    display: inline;
    margin-left: 10px;
  }
  .menu-secundario a{
    padding: 8px 20px;
    color: #ffbb00;
  }
  .menu-secundario a:hover{
    color: #000000;
  }
`;

const Button = styled.button`
  background-color: transparent;
  padding: 8px 0;
  border: 2px solid #ffbb00;
  border-radius: 8%;
  margin-right: 10px;
  :hover{
    background-color: #ffbb00;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <>
      <StyledHeader>
        <header className="">
          <nav className="menus">
            <Link className="logo-img" to="/"><img src={logo} alt="Logo Lineage 2 Battle"/></Link>
            <div className="menu-principal">
              <li><Link className="" to="/">Home</Link></li>
              <li><Link className="" to="/register">Register</Link></li>
              <li><Link className="link-menu-login" to="/profile">Sign in</Link></li>
            </div>
            <div className="menu-secundario">
              <Button>
                <li><Link className="" to="/">Sign in</Link></li>
              </Button>
            </div>
          </nav>
        </header>
      </StyledHeader>
      </>
    )
  }
}