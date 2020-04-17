import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import { ComboBox } from '@progress/kendo-react-dropdowns';

import api from '../../services/api';

import './style.css';

export default function Register() {
  // const getFixo = ['MMD', 'HSD', 'HSS'];

  // const state = { allowCustom: true };
  // const allowCustom = state.allowCustom;

  const [login, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  const [fixo, setFixo] = useState(['MMD', 'HSD', 'HSS']);
  const [senha, setPassword] = useState('');
  const [confirmarsenha, setPasswordConfirmed] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data =({
      login,
      fixo,
      senha,
      confirmarsenha
    });

    try{
      const response = await api.post('/cadastrar.php', data);
    
      if(response.data.result === true){
        alert('Cadastrado com sucesso!');
        history.push('/login');
      }
    }
    catch(err){
      alert('Erro no cadastro, tente novamente.');
    }
  }
 
  return (
    <div className="container-register">
      <div className="content-register">
        <form onSubmit={handleRegister}>
          <h1>Cadastre-se</h1>
          <input 
            type="text" 
            placeholder="Username"
            value={login}
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="text"
            value={fixo}
            onChange={e => setFixo(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha"
            value={senha}
            onChange={e => setPassword(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Confirmar senha"
            value={confirmarsenha}
            onChange={e => setPasswordConfirmed(e.target.value)} 
            />
          {/* <div className="radio-button-register">
            <input type="radio" />Eu aceito os <Link to="/register">termos de uso</Link>
          </div> */}
          <button type="submit">Submit</button>
          
        </form>
        <div className="links-register">
          <Link className="back-link-register" to="/">
            <FiArrowLeft className="arrow-left-register" size={16} color="#ffbb00"/> Voltar para home
          </Link>
          <Link className="foward-link-register" to="/login">
            Já possui uma conta? <FiArrowRight className="arrow-right-register" size={16} color="#ffbb00"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
