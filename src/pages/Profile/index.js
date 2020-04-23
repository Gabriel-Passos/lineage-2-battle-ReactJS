import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';

import './style.css';

import ImgTest from '../../assets/logo.png';

import Personagens from '../../components/ProfilePage/Personagens';

// import api from '../../services/api';

export default function Profile() {
  // const [users, setUsers] = useState(false);

  // const getUsers = async () => {
  //   const response = await api.get('/');
  //   setUsers(response.data);
  // }

  // useEffect(() => {
  //   getUsers();
  // }, [])

  // if(users === false){
  //   return(
  //     <>
  //       Carregando dados...
  //     </>
  //   )
  // } else{
    return (
      <>
        <section className="container-profile">
          <aside className="container-aside-profile">
            <header className="container-header-profile">
              <h1>Painel do usuário</h1>
              <Link to="/">Sair</Link>
            </header>
            <div className="aside-top">
              <h1>Bem Vindo(a)</h1>
              <img src={ImgTest} alt=""/>
              {/* <h2>{users[0]['boss_name']}</h2> */}
            </div>
            <div className="aside-bottom">
              <div className="menu-text-profile">
                <h1>Menu</h1>
              </div>
              <h2>Characters</h2>
              <Link to="/profile/personagens"id="btnPerson" >Personagens</Link>
              <Link to="/profile" id="btnUnlockChar" >Destravar char</Link>
              <Link to="/profile" id="btnInfo" >Informações</Link>
              <h2>Conta</h2>
              <Link to="/profile" id="btnInfoAcc" >Informações da conta</Link>
              <Link to="/profile" id="btnAlterPass" >Alterar senha</Link>
              <Link to="/profile" id="btnAlterEmail" >Alterar E-mail</Link>
              <h2>Recursos</h2>
              <Link to="/profile" id="btnViewInve" >Ver inventário</Link>
              <Link to="/profile" id="btnLiveMap" >Live map</Link>
              <Link to="/profile" id="btnLeilao" >Leilão</Link>
              <Link to="/profile" id="btnBossLive" >Boss live</Link>
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
              <Route path="/profile/personagens" render={()=>(<Personagens />)} />
            </div>
          </section>
        </section>
      </>
    )
  // }
}
