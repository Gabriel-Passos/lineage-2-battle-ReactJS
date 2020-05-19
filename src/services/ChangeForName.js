
import { Switch } from 'react-router-dom';

export const conversor = (props)=>{

    props.map((dados, index)=>{
        switch (dados.race) {
            case 0:
                props[index].race = "Humano";
                break;

            case 1:
                props[index].race = "Elfo";
                break;
            case 2:
                props[index].race = "Dark Elfo";
                break;
            case 3:
                props[index].race = "Orc"
                break;
            case 4:
                props[index].race = "Anão"
                break;
          }

          switch (dados.sex) {
            case 1:
                props[index].sex = "Feminino";
            
            case 0:
                props[index].sex = "Masculino";
          }

          if(dados.online == 0){
            dados.online = "ico-off.png";
          }else{
            dados.online = "ico-on.png";
          }

    })
    

    return props;
  
}

