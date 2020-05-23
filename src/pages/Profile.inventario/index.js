import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronLeft, FiSearch} from 'react-icons/fi';

import {ContainerInventario ,InventarioHeader, FormInventario, Personagens} from './style';

import api from '../../services/api';

const Inventario = () => {
  const [charName, setcharName] = useState('');
  const [personagemList, setPersonagemList] = useState([]);

  const handlePesquisarInventario = async e => {
    e.preventDefault();

    const response = await api.post('/charactersname.php', {charName});
    try{
      if(response.data === false){
        alert("Personagem não existe");
      } else{
        setPersonagemList(response.data);
      }
    } catch(err){
      alert(`Falha na pesquisa, erro: ${err}`);
    }
  }

  return (
    <>
      <ContainerInventario>
        <InventarioHeader>
            <h1>Pesquise um personagem e veja seus itens</h1>
            <Link to="/profile">
              <FiChevronLeft size={20}/>
              Voltar
            </Link>
        </InventarioHeader>

        <FormInventario onSubmit={handlePesquisarInventario}>
          <input
            type="text"
            placeholder="Nome do personagem"
            value={charName}
            onChange={e => setcharName(e.target.value)}
          />
          <button type="submit"><FiSearch size={15}/></button>
        </FormInventario>

        {personagemList.map((perso, index) => (
          <Personagens key={index}>
            <h1>{perso.char_name}</h1>
            <button type="button">Ver itens equipados</button>
            <button type="button">Ver inventário</button>
          </Personagens>
        ))}
      </ContainerInventario>
    </>
  );
}

export default Inventario;
