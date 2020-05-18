import React, {useState} from 'react';
import {Collapse, Button} from 'react-bootstrap';
import {FiChevronDown} from 'react-icons/fi';

import {ContainerPersonagens, PersonagensHeader, Personagens, PersonagensItem} from './style'

const Pesonagem = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContainerPersonagens>
        <PersonagensHeader>
          <h1>Aqui está a lista de todos os seus personagens</h1>
          <div>
            <strong>0</strong>
            <p>Personagens</p>
          </div>
        </PersonagensHeader>

        <Personagens>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKxG9cO8Rm6qkgOTuJzv4lK8WMNgXECb5PImMFbE3WwdUPAWPW&usqp=CAU" alt=""/>
          <h1>Nome do personagem</h1>

          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <FiChevronDown size={20} color=""/>
          </Button>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <hr/>
              <PersonagensItem>
                <div>
                  <strong>Classe</strong>
                  <p>0</p>
                </div>
                <div>
                  <strong>Raça</strong>
                  <p>0</p>
                </div>
                <div>
                  <strong>Sexo</strong>
                  <p>0</p>
                </div>
                <div>
                  <strong>Level</strong>
                  <p>0</p>
                </div>
                <div>
                  <strong>Classe base</strong>
                  <p>0</p>
                </div>
                <div>
                  <strong>Status</strong>
                  <p>0</p>
                </div>
              </PersonagensItem>
            </div>
          </Collapse>
        </Personagens>
      </ContainerPersonagens>
    </>
  );
}

export default Pesonagem;
