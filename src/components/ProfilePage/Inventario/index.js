import React, { useState, useEffect } from 'react';

import './style.css'

import api from '../../../services/api';

export default function Inventario() {
  const [charName, setCharName] = useState('');
  const [dadosChar, setDadosChar] = useState([]);

  const handleCharName = async e => {
    e.preventDefault();
    
    try{
      const response = await api.post('/charactersname.php', {charName});
      
      if(response.data === false){
        alert("Personagem não existe");
      } else {
        setDadosChar(response.data);
      }
    } catch(err){
      alert("Falha na pesquisa, tente novamente mais tarde.");
    }
  }  
  return (
    <>
      <section className="container-inventario">
        <div className="header-inventario">
          <h1>Informe o nome do jogador que queira ver o inventário</h1>
          <form onSubmit={handleCharName}>
            <input 
              type="text"
              placeholder="Nome do jogador"
              value={charName}
              onChange={e => {setCharName(e.target.value)}}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        {dadosChar.map((dadosChar, index) => (
          <div className="content-inventario" key={index}>
            <li>Nome do personagem: {dadosChar.char_name}</li>
          </div>
        ))}
      </section>
    </>
  );
}