import React, { Component } from 'react';

import './style.css';

export default class Header extends Component {
    render() {
      return (
        <>
            <div className="wallpaper-btnPlay">
              <div className="div-Play">
                <button id="btn_play">JOGAR AGORA!</button>
              </div>
            </div>
        </>
      )
    }
}