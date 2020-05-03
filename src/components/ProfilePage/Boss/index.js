import React, {useState, useEffect} from 'react';

import api from '../../../services/api';

import './style.css';

import ImgTest from '../../../assets/images/bg-mobile.jpg';

export default function Boss() {
  const [boss, setboss] = useState([]);

  const getBoses = async () => {
    const response = await api.get('/boss.php');
    setboss(response.data);
  }

  useEffect(() => {
    getBoses();
  }, [])

  if(boss === null){
    return(
      <h1>Carregando dados...</h1>
    )
  } else{
    return (
      <>
        <section className="container-boss">
          {boss.map((boss, index) => (
            <div className="boss-card" key={index}>
              <img src={ImgTest} alt=""/>
              <div className="boss-info">
                <div className="header-boss">
                  <h1>{boss.boss_name}</h1>
                  <h1>Lvl {boss.boss_level}</h1>
                </div>
                <hr/>
                <div className="history-boss">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, debitis quisquam nesciunt ullam amet ea a facilis quae quas sed laboriosam assumenda cum atque voluptas sit. Optio magnam cum provident.</p>
                </div>
                <hr/>
                <div className="footer-boss">
                  <h1>live</h1>
                  <h1>Renascendo em {boss.boss_time}</h1>
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
}
