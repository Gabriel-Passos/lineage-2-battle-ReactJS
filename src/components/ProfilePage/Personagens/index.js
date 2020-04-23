import React, {useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';

import api from '../../../services/api';

import './style.css';

import ImgCardTest from '../../../assets/images/back.png';

export default function Personagens() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    api.get('/painelUsuarioCharacters.php').then(response => {
      setChars(response.data);
    })
  }, [])

  return (
    <>
      <section className="container-personagem">
        {chars.map(char => (
          <div className="card">
            <img src={ImgCardTest} alt=""/>
            <div className="dados-char">
              <h3><b>Nome:</b> {char.char_name}</h3>
              <h3><b>Classe</b> Arqueiro</h3>
              <h3><b>Raça:</b> Dark Elfo</h3>
              <h3><b>Sexo:</b> Masculino</h3>
              <h3><b>Level: </b> 80</h3>
              <h3><b>Classe base:</b> Dagger</h3>
              <h3><b>Status: </b> Offline</h3>
            </div>
            <Link to="">Destravar char</Link>
          </div>
        ))}
      </section>
    </>
  );
}
