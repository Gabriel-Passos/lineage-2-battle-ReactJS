import React from 'react';
import {} from 'react-icons/fi';

import './style.css';

export default function Footer(){
    const [mapping, setMappaing] = useState([]);

    const getMapping = async () => {
        const response = await api.get('/mapa.php');
        setMappaing(response.data);
      }
    
      useEffect(() => {
        getMapping();
      }, [])


  return(
    <>
      <div className="backmapa">
        <div className="container-footer">
            {mapping.map((map, index) => (
                <div style={`position:absolute;top:'${map.y}'px;left:'${map.x}'px\><img src='${map.race}'.png'`}></div>
            ))}
        
        </div>
      </div>
    </>
  )
}