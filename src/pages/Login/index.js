import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    const data =({
      login,
      senha
    });

    try{
       await api.post('/login.php', data);

      // if(response.data.result === true){
        history.push('/profile');
      
    }catch(err){
      alert('Falha no login, tente novamente mais tarde.');
    }

  }

  return (
    <div className="container-login">
      <div className="content-login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input 
            type="text" 
            placeholder="E-mail"
            value={login}
            onChange={e =>setLogin(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="links-login">
          <Link className="back-link-login" to="/">
            <FiArrowLeft className="arrow-left-login" size={16} color="#ffbb00" /> Voltar para home
          </Link>
          <Link className="foward-link-login" to="/register">
            Não possui uma conta? <FiArrowRight className="arrow-right-login" size={16} color="#ffbb00"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
