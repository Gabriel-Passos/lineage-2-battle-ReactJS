import React from 'react';
import {Link, Route, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi'

import './style.css';

import ImgTest from '../../assets/logo.png';

import Personagens from '../../components/ProfilePage/Personagens';
import Boss from '../../components/ProfilePage/Boss';
import Inventario from '../../components/ProfilePage/Inventario';

export default function Profile() {
  const history = useHistory();

  const userName = localStorage.getItem('userName');

  function handleLogout(){
    localStorage.clear();

    history.push('/');
  }
    return (
      <>
        <section className="container-profile"> 
          <aside className="container-aside-profile">
            <header className="container-header-profile">
              <h1>Painel do usuário</h1>
              <button onClick={handleLogout}><FiPower size={16} color="#000000"/></button>
            </header>
            <div className="aside-top">
              <h1>Bem Vindo(a)</h1>
              <img src={ImgTest} alt=""/>
              <h2>{userName}</h2>
            </div>
            <div className="aside-bottom">
              <div className="menu-text-profile">
                <h1>Menu</h1>
              </div>
              <h2>Characters</h2>
              <Link to="/profile/personagens" id="btnPerson" >Personagens</Link>
              <h2>Conta</h2>
              <Link to="/profile" id="btnInfoAcc" >Informações da conta</Link>
              <Link to="/profile" id="btnAlterPass" >Alterar senha</Link>
              <Link to="/profile" id="btnAlterEmail" >Alterar E-mail</Link>
              <h2>Recursos</h2>
              <Link to="/profile/inventario" id="btnViewInve" >Ver inventário</Link>
              <Link to="/profile" id="btnLiveMap" >Live map</Link>
              <Link to="/profile" id="btnLeilao" >Leilão</Link>
              <Link to="/profile/boss" id="btnBossLive" >Boss live</Link>
              <h2>Suporte</h2>
              <Link to="/profile" id="btnContatEmail" >Enviar e-mail</Link>
              <h2>Shop</h2>
              <Link to="/profile" id="btnHistCompra" >Histórico de compra</Link>
              <Link to="/profile" id="btnShop" >Produtos</Link>
              <footer className="footer-profile">
                <h2>Sessão termina: 20:36</h2>
              </footer>
            </div>
          </aside>
          <section className="container-section-profile">
            <div className="content-profile">
              <Route path="/profile/personagens" exact render={()=>(<Personagens />)} />
              <Route path="/profile/boss" exact render={()=>(<Boss />)} />
              <Route path="/profile/inventario" exact render={()=>(<Inventario />)} />
            </div>
          </section>
        </section>
      </>
    )
  // }
}
