import React from 'react';
import {Link} from 'react-router-dom';

import {ConatinerProfile, ProfileHeader, Menu, ItensMenu} from './style';

const Profile = () => {
  const username = localStorage.getItem('userName');
  return (
    <>
      <ConatinerProfile>
        <ProfileHeader>
          <div>
            <button>
              <img src="https://www.lineage2.com/images/desktop/classic/180919-L2-Classic-Heroes.jpg" alt=""/>
            </button>
            <h1>Seja bem-vindo ao seu perfil, {username}</h1>
            <Link to="/">Sair</Link>
          </div>
        </ProfileHeader>

        <Menu>
          <h2>Menu</h2>

          <ItensMenu>
            <div>
              <strong>Characters</strong>
              <Link to="/profile/personagens">Personagens</Link>
            </div>
          </ItensMenu>

          <ItensMenu>
            <div>
              <strong>Conta</strong>
              <div>
                <Link to="/profile">Informações da conta</Link>
                <Link to="/profile">Alterar senha</Link>
              </div>
            </div>
          </ItensMenu>

          <ItensMenu>
            <div>
              <strong>Recursos</strong>
              <div>
                <Link to="/profile/itens">Ver inventário</Link>
                <Link to="/profile">Leilão</Link>
                <Link to="/profile">Boss live</Link>
                <Link to="/profile">Mapa live</Link>
              </div>
            </div>
          </ItensMenu>

          <ItensMenu>
            <div>
              <strong>Suporte</strong>
              <Link to="/profile">Enviar e-mail</Link>
            </div>
          </ItensMenu>

          <ItensMenu>
            <div>
              <strong>Shop</strong>
              <Link to="/profile">Produto</Link>
              <Link to="/profile">Histórico de compra</Link>
            </div>
          </ItensMenu>
        </Menu>
      </ConatinerProfile>
    </>
  );
}

export default Profile;
