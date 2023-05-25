import {Container,Profile} from './style'
import {Search} from '../Search'
import {Link} from 'react-router-dom'
export function Header(){

return (
 <Container>
  <h1>RocketMovies</h1>
  <Search type="text" PlaceHolder="Pesquise pelo título"/>
  <Profile>
  <div>
    <h2>Lucas Ribeiro</h2>
    <button type="text">sair</button>
  </div>

  <Link to="/profile">
  <img src="https://github.com/lucasbackend.png" alt="Imagem de perfil" />
  </Link>
  </Profile>
 </Container>

)


}