import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FiHexagon, FiInstagram, FiFacebook, FiGithub, FiLink} from 'react-icons/fi'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header/Header';
import Conteudo from '../../components/conteudo/'

import './style.css';

import ImgDivMenu from '../../assets/images/imgDivMenu.png';
import logo from '../../assets/images/l2-logo.png';
import interludeLogo from '../../assets/images/interlude-logo.png';

import {Button, Modal} from 'react-bootstrap';
import api from '../../services/api';

export default function Home(){

   return (
    <>
      <Header />
      <div className="container-home home-mobile">
        <div className="container-menu-left">
          <div className="imgtop">
            <img src={ImgDivMenu} alt=""/>
          </div>
          <div className="menu">
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Home</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Informação</Link></li>
            <li><Link to="/register"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Cadastro</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Doação</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> História</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Classes</Link></li>
          </div>
          <div className="imgbottom">
            <img src={ImgDivMenu} alt=""/> 
          </div>
        </div>
        <div className="btn-play">
          <img src={logo} alt=""/>
          <div className="interlude-logo">
            <img src={interludeLogo} alt=""/>
          </div>
          <Link to="/" className="myButton">JOGAR</Link>
        </div>
        <div className="container-menu-right">
          <div className="imgtop">
            <img src={ImgDivMenu} alt=""/>
          </div>
          <div className="menu">
              <li><Link to="/"><FiInstagram size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiFacebook size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiGithub size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiLink size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
          </div>
          <div className="imgbottom">
            <img src={ImgDivMenu} alt=""/>
          </div>
        </div>
      </div>
      <Conteudo />
    </>
  );
}
