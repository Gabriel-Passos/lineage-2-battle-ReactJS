import React, { Component } from 'react';

import './style.css';

export default class Header extends Component {
    render() {
      return (
        <>
            <div className="wallpaper-btnPlay">
              <div className="div-Play">
                <a href="#" class="myButton">JOGAR!</a>
              </div>
            </div>
        </>
      )
    }
}