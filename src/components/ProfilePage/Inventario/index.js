import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './style.css'

import api from '../../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';

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

  const [modal, setModal] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getItens(){
    const response = await api.get("charactersitens.php");

    let i=0;

    let max = Object.keys(response.data).length;

    while(i < max ){
      if(response.data[i].item_id == null){
        console.log(response.data[i].item_id);
        response.data[i].item_id = "blank";
      }
      i++;
    }
    setModal(response.data);
  }
  useEffect(()=>{
    getItens();
  }, [])

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
            <div className="dados-inventario">
              <li>Nome do personagem: <span>{dadosChar.char_name}</span></li>
              <Button variant="primary" onClick={handleShow} >
                Ver Inventario
              </Button>
            </div>
          </div>
        ))}
      </section>


      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal_tittle">Itens</Modal.Title>
        </Modal.Header>
          <Modal.Body className="div_modal">{modal.map((dados, index)=>(
              <div key={index} className="hover_itens">
                <img className="imgitens" src={require(`../../../assets/items_icon/${dados.item_id}.gif`)}/>
                <div className="itens_info"><h3>{dados.item_name}</h3> <h3>enchant:{dados.enchant_level}</h3> <h3>Quantidade:{dados.amount}</h3></div>
              </div>
          ))}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}