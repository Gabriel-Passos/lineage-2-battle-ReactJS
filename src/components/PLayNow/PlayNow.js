import React from 'react';
import { Link } from 'react-router-dom';
import {FiHexagon, FiInstagram, FiFacebook, FiGithub, FiLink} from 'react-icons/fi'

import './style.css';
import ImgDivMenu from '../../assets/images/imgDivMenu.png';

export default function PlayNow(){
  return (
    <>
        <div className="container-playnow">
          {/* <div className="container-left"> */}
            <div className="container-menu-left">
              <div className="imgtop">
                <img src={ImgDivMenu} alt=""/>
              </div>
              <div className="menu">
                <li><Link><FiHexagon size={10} color="#fff"/> Classes</Link></li>
                <li><Link><FiHexagon size={10} color="#fff"/> Classes</Link></li>
                <li><Link><FiHexagon size={10} color="#fff"/> Classes</Link></li>
                <li><Link><FiHexagon size={10} color="#fff"/> Classes</Link></li>
                <li><Link><FiHexagon size={10} color="#fff"/> Classes</Link></li>
              </div>
              <div className="imgbottom">
                <img src={ImgDivMenu} alt=""/>
              </div>
            </div>
          {/* </div> */}
          <div className="btn-play">
            <h2>Lineage II</h2>
            <Link to="/" className="myButton">JOGAR</Link>
          </div>
          <div className="container-menu-right">
            <div className="imgtop">
              <img src={ImgDivMenu} alt=""/>
            </div>
            <div className="menu">
              <li><Link><FiInstagram size={20} color="#fff"/></Link></li>
              <li><Link><FiFacebook size={20} color="#fff"/></Link></li>
              <li><Link><FiGithub size={20} color="#fff"/></Link></li>
              <li><Link><FiLink size={20} color="#fff"/></Link></li>
            </div>
            <div className="imgbottom">
              <img src={ImgDivMenu} alt=""/>
            </div>
          </div>
        </div>
    </>
  )
}