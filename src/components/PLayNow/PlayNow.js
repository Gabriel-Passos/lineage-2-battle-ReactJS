import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FiHexagon, FiInstagram, FiFacebook, FiGithub, FiLink} from 'react-icons/fi'

import api from '../../services/api';

import './style.css';
import ImgDivMenu from '../../assets/images/imgDivMenu.png';
import logo from '../../assets/images/l2-logo.png';
import interludeLogo from '../../assets/images/interlude-logo.png';

export default function PlayNow(){
  const [tests, setTests] = useState([]);

  useEffect(() =>  {
    api.get('/boss.php').then(response => {
      setTests(response.data);
    });
  },[]);

  return (
    <>
        <div className="container-playnow">
          <div className="container-menu-left">
            <div className="imgtop">
              <img src={ImgDivMenu} alt=""/>
            </div>
            <div className="menu">
              <li><Link to="/"><FiHexagon size={10} color="#fff"/> {tests}</Link></li>
              <li><Link to="/"><FiHexagon size={10} color="#fff"/> Informação</Link></li>
              <li><Link to="/register"><FiHexagon size={10} color="#fff"/> Cadastro</Link></li>
              <li><Link to="/"><FiHexagon size={10} color="#fff"/> Doação</Link></li>
              <li><Link to="/"><FiHexagon size={10} color="#fff"/> História</Link></li>
              <li><Link to="/"><FiHexagon size={10} color="#fff"/> Classes</Link></li>
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
              <li><Link to="/"><FiInstagram size={20} color="#fff"/></Link></li>
              <li><Link to="/"><FiFacebook size={20} color="#fff"/></Link></li>
              <li><Link to="/"><FiGithub size={20} color="#fff"/></Link></li>
              <li><Link to="/"><FiLink size={20} color="#fff"/></Link></li>
            </div>
            <div className="imgbottom">
              <img src={ImgDivMenu} alt=""/>
            </div>
          </div>
        </div>
    </>
  )
}