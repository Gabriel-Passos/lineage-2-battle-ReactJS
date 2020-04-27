import React, {useState, useEffect} from 'react';

import api from '../../../services/api';

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
          <h1>Hello Boss</h1>
        </section>
      </>
    );
  }
}
