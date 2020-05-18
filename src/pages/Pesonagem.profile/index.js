import React, {useState, useEffect} from 'react';

import {ContainerPersonagens, PersonagensHeader, Personagens, PersonagensItemHeader} from './style'

import api from '../../services/api';

const Pesonagem = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await api.get('/charactersname.php');
    setCharacters(response.data);
  }

  useEffect(()=>{
    getCharacters();
  }, []);

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

        {characters.map(char => (
          <Personagens>
            <PersonagensItemHeader>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKxG9cO8Rm6qkgOTuJzv4lK8WMNgXECb5PImMFbE3WwdUPAWPW&usqp=CAU" alt=""/>
              <h1>{char.char_name}</h1>
              <div />
            </PersonagensItemHeader>

            <hr/>
            <section>
              <div>
                <strong>Classe</strong>
                <p>{char.classid}</p>
              </div>
              <div>
                <strong>Raça</strong>
                <p>{char.race}</p>
              </div>
              <div>
                <strong>Sexo</strong>
                <p>{char.sex}</p>
              </div>
              <div>
                <strong>Level</strong>
                <p>{char.level}</p>
              </div>
              <div>
                <strong>Classe base</strong>
                <p>{char.base_class}</p>
              </div>
              <div>
                <strong>Status</strong>
                <p>{char.online}</p>
              </div>
            </section>
          </Personagens>
        ))}
      </ContainerPersonagens>
    </>
  );
}

export default Pesonagem;
