import React from 'react';
import {Link} from 'react-router-dom';

import {ConatinerProfile, Header, PictureProfile, Menu} from './style';

const ProfileV2 = () => {
  return (
    <>
      <ConatinerProfile>
        <Header>
          <header>
            <h1>Seja bem-vindo ao seu perfil, wederdark2</h1>
            <button>Sair</button>
          </header>
        </Header>

        <PictureProfile>
          {/* <img src="https://www.lineage2.com/images/desktop/classic/180919-L2-Classic-Heroes.jpg" alt=""/>
          <Link>Alterar imagem</Link> */}
        </PictureProfile>

        <Menu>
          <h2>Menu</h2>

          <div>
            <strong>Characters</strong>
            <Link>Personagens</Link>
          </div>

          <div>
            <strong>Conta</strong>
            <div>
              <Link>Informações da conta</Link>
              <Link>Alterar senha</Link>
            </div>
          </div>

          <div>
            <strong>Recursos</strong>
            <div>
              <Link>Ver inventário</Link>
              <Link>Leilão</Link>
              <Link>Boss live</Link>
              <Link>Mapa live</Link>
            </div>
          </div>

          <div>
            <strong>Suporte</strong>
            <Link>Enviar e-mail</Link>
          </div>

          <div>
            <strong>Shop</strong>
            <Link>Produto</Link>
            <Link>Histórico de compra</Link>
          </div>
        </Menu>
      </ConatinerProfile>
    </>
  );
}

export default ProfileV2;
