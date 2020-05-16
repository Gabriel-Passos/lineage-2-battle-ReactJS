import React from 'react';
import {Link} from 'react-router-dom';

import {ConatinerProfile, Header, PictureProfile, Menu, ItensMenu} from './style';

const ProfileV2 = () => {
  return (
    <>
      <ConatinerProfile>
        <section>
          <Header>
            <div>
              <h1>Seja bem-vindo ao seu perfil, wederdark2</h1>
              <button>Sair</button>
            </div>
          </Header>

          <PictureProfile>
            <div>
              <img src="https://www.lineage2.com/images/desktop/classic/180919-L2-Classic-Heroes.jpg" alt=""/>
              <Link>Alterar imagem</Link>
            </div>
          </PictureProfile>

          <Menu>
            <h2>Menu</h2>

            <ItensMenu>
              <div>
                <strong>Characters</strong>
                <Link>Personagens</Link>
              </div>
            </ItensMenu>

            <ItensMenu>
              <div>
                <strong>Conta</strong>
                <div>
                  <Link>Informações da conta</Link>
                  <Link>Alterar senha</Link>
                </div>
              </div>
            </ItensMenu>

            <ItensMenu>
              <div>
                <strong>Recursos</strong>
                <div>
                  <Link>Ver inventário</Link>
                  <Link>Leilão</Link>
                  <Link>Boss live</Link>
                  <Link>Mapa live</Link>
                </div>
              </div>
            </ItensMenu>

            <ItensMenu>
              <div>
                <strong>Suporte</strong>
                <Link>Enviar e-mail</Link>
              </div>
            </ItensMenu>

            <ItensMenu>
              <div>
                <strong>Shop</strong>
                <Link>Produto</Link>
                <Link>Histórico de compra</Link>
              </div>
            </ItensMenu>
          </Menu>
        </section>
      </ConatinerProfile>
    </>
  );
}

export default ProfileV2;
