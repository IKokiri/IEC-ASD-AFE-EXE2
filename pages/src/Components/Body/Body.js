import Dica from '../Dica/Dica'
import {dicas} from '../../dados/Dicas'


function Body() {

  return (
    <div>
      
      <h4>
        <a href="#">Últimas do BLOG</a>
      </h4>  

      <div className="text-left">
      {
        dicas.map((items =>
          <Dica titulo={items.titulo} texto={items.texto}/>
        ))
      }
      </div>

      <h5>
        <a href="#">Ver Mais</a>
      </h5>
      </div>
  );
}

export default Body;