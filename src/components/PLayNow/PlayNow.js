import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function PlayNow(){
  return (
    <>
        <div className="container-playnow">
          <div className="menu">
            <li><Link>Classes</Link></li>
            <li><Link>Classes</Link></li>
            <li><Link>Classes</Link></li>
            <li><Link>Classes</Link></li>
            <li><Link>Classes</Link></li>
          </div>
          <div className="btn-play">
            <Link to="/" className="myButton">JOGAR</Link>
          </div>
        </div>
    </>
  )
}