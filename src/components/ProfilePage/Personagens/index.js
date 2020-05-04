import React, {useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';

import api from '../../../services/api';

import './style.css';

import ImgCardTest from '../../../assets/images/back.png';

export default function Personagens() {
  const [chars, setChars] = useState([]);

  const getUsers = async () => {
    const response = await api.get('/painelUsuarioCharacters.php');
    localStorage.setItem("teste", JSON.stringify(response.data));
    const dadosCharacters = JSON.parse(localStorage.getItem('teste'));
  
    setChars(dadosCharacters);
  }

  useEffect(() => {
    getUsers();
  }, [])

  if(chars === null){
    return(
      <>
        <h1>Carregando dados...</h1>
      </>
    )
  } else{
    return (
      <>
        <section className="container-personagem">
          {chars.map(char => {
            return(
              <div key={char.charId} className="card">
                <img src={ImgCardTest} alt=""/>
                <div className="dados-char">
                  <h3><b>Nome:</b> {char.char_name}</h3>
                  <h3><b>Classe:</b> {char.classid}</h3>
                  <h3><b>Raça:</b> {char.race}</h3>
                  <h3><b>Sexo:</b> {char.sex}</h3>
                  <h3><b>Level: </b> {char.level}</h3>
                  <h3><b>Classe base:</b> {char.base_class}</h3>
                  <h3><b>Status: </b> {char.online}</h3>
                </div>
                <hr/>
                <Link to="">Destravar char</Link>
              </div>
            )
          })}
        </section>
      </>
    );
  }
}
