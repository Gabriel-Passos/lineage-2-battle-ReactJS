import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header(){
  return (
    <>
        <div className="wallpaper-btnPlay">
          <div className="div-Play">
            <Link to="/" className="myButton">JOGAR!</Link>
          </div>
        </div>
    </>
  )
}