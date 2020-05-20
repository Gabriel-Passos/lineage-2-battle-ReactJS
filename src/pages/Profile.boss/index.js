import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronLeft} from 'react-icons/fi';

import {CointainerBoss, BossHeader, Bosses, InfoBosses} from './style';

import api from '../../services/api';

const Boss = () => {
  const [bosses, setBosses] = useState([]);

  const getBosses = async () => {
    const response = await api.get('boss.php');
    try{
      setBosses(response.data);

    } catch (err){
      alert(`Erro: ${err}`);
    }
  }

  const getNumberBosses = () => {
    const lengthBosses = bosses;
    return lengthBosses.length;
  }

  useEffect(()=>{
    getBosses();
  }, []);

  return (
    <>
      <CointainerBoss>
        <BossHeader>
          <div>
            <h1>Aqui você encontrará uma lista com todos os bosses do jogo</h1>
            <Link to="/profile">
              <FiChevronLeft size={20}/>
              Voltar
            </Link>
          </div>
          <nav>
            <strong>{getNumberBosses()}</strong>
            <p>Bosses</p>
          </nav>
        </BossHeader>
        {bosses.map((boss, index) => (
          <Bosses key={index}>
            <section>
              <img src="https://miro.medium.com/max/1700/0*_owBKdPRVk7uKzsm" alt=""/>
              <h1>{boss.boss_name}</h1>
              <InfoBosses>
                <div>
                  <strong>Level</strong>
                  <p>{boss.boss_level}</p>
                </div>
                <strong>Resnascendo em: </strong>
                <span>{boss.boss_time}</span>
              </InfoBosses>
            </section>
          </Bosses>
        ))}
      </CointainerBoss>
    </>
  );
}

export default Boss;
