import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

import ImgTest from '../../assets/logo.png';

// import api from '../../services/api';

export default function Profile() {

  return (
    <>
      <section className="container-profile">
        <aside className="container-aside-profile">
          <div className="aside-top">
            <h1>Bem Vindo</h1>
            <img src={ImgTest} alt=""/>
            <h2>Gayzin</h2>
          </div>
          <div className="aside-bottom">
            <div className="menu-text-profile">
              <h1>Menu</h1>
            </div>
            <h2>Characters</h2>
            <Link to="" id="btnPerson">Personagens</Link>
            <Link to="" id="btnUnlockChar">Destravar char</Link>
            <Link to="" id="btnInfo">Informações</Link>
            <h2>Conta</h2>
            <Link to="" id="btnInfoAcc">Informações da conta</Link>
            <Link to="" id="btnAlterPass">Alterar senha</Link>
            <Link to="" id="btnAlterEmail">Alterar E-mail</Link>
            <h2>Recursos</h2>
            <Link to="" id="btnViewInve">Ver inventário</Link>
            <Link to="" id="btnLiveMap">Live map</Link>
            <Link to="" id="btnLeilao">Leilão</Link>
            <Link to="" id="btnBossLive">Boss live</Link>
            <h2>Suporte</h2>
            <Link to="" id="btnContatEmail">Enviar e-mail</Link>
            <h2>Shop</h2>
            <Link to="" id="btnHistCompra">Histórico de compra</Link>
            <Link to="" id="btnShop">Produtos</Link>
          </div>
        </aside>
        <section className="container-section-profile">
          <header className="container-header-profile">
            <h1>Painel do usuário</h1>
            <Link to="/">Sair</Link>
          </header>
          <div className="content-profile">

          </div>
          <footer className="footer-profile">
            <h2>Sessão termina: 20:36</h2>
          </footer>
        </section>
      </section>
    </>
  )
}
