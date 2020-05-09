import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FiHexagon, FiInstagram, FiFacebook, FiGithub, FiLink} from 'react-icons/fi'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header/Header';
import Conteudo from '../../components/conteudo/'

import './style.css';

import ImgDivMenu from '../../assets/images/imgDivMenu.png';
import logo from '../../assets/images/l2-logo.png';
import interludeLogo from '../../assets/images/interlude-logo.png';

import {Button, Modal} from 'react-bootstrap';
import api from '../../services/api';

export default function Home(){

  const [modal, setModal] = useState([]);

  async function getItens(){
    const response = await api.get("charactersitens.php");

    let i=0;

    let max = Object.keys(response.data).length;

    while(i < max ){
      console.log(i);
      console.log(response.data[i].item_id);
      console.log("----------------------------------------------");

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
    <>
      <Header />
      <div className="container-home home-mobile">
        <div className="container-menu-left">
          <div className="imgtop">
            <img src={ImgDivMenu} alt=""/>
          </div>
          <div className="menu">
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Home</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Informação</Link></li>
            <li><Link to="/register"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Cadastro</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Doação</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> História</Link></li>
            <li><Link to="/"><FiHexagon size={10} color="#fff" className="optn-menu-icon"/> Classes</Link></li>
          </div>
          <div className="imgbottom">
            <img src={ImgDivMenu} alt=""/> 
          </div>
        </div>
        <div className="btn-play">
          <img src={logo} alt=""/>
          <div className="interlude-logo">
            <img src={interludeLogo} alt=""/>
          </div>
          <Link to="/" className="myButton">JOGAR</Link>
        </div>
        <div className="container-menu-right">
          <div className="imgtop">
            <img src={ImgDivMenu} alt=""/>
          </div>
          <div className="menu">
              <li><Link to="/"><FiInstagram size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiFacebook size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiGithub size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
              <li><Link to="/"><FiLink size={20} color="#fff" className="optn-menu-icon-rigth"/></Link></li>
          </div>
          <div className="imgbottom">
            <img src={ImgDivMenu} alt=""/>
          </div>
        </div>
      </div>
      <Conteudo />
      <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Itens</Modal.Title>
        </Modal.Header>
          <Modal.Body>{modal.map((dados, index)=>(
              <div key={index}><img className="imgitens" src={require(`../../assets/items_icon/${dados.item_id}.gif`)}/>{dados.item_id}</div>
          ))}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
