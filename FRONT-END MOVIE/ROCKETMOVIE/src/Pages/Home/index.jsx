import {Container} from './style'
import {Header} from '../../Components/Header'
import { Button } from '../../Components/Button'
import { AiOutlinePlus } from "react-icons/ai";
import { ListaFilmes } from '../../Components/ListaFilmes';
import {Link} from 'react-router-dom'

export function Home(){

return (

<Container>
<Header/>

<div className="Content">
<main>
  <div className="Container">
    <h1>Meus filmes</h1>
    <div>
      <Link to="/new">
        {<AiOutlinePlus size={20}/>}
        Adicionar filme
      </Link>
    </div>

  </div>

  <div className="Lista">
    <ul>
      <li>
      <Link to="/details/1">
      <ListaFilmes data={{Titulo:"Interestellar",Rating:3,ID:'1',Tags:[{tag:"Ficção Científica",ID:1},{tag:"Drama",ID:2},{tag:"Família",ID:3}],Descricao:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se..."}}>
      </ListaFilmes>
      </Link>
      </li>
     
    </ul>
  </div>
</main>
</div>
</Container>

)


}