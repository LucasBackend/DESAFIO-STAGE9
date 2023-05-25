import {Container,Login,Background} from './style';
import {InputText} from '../../Components/InputText';
import {Button} from '../../Components/Button';
import {ButtonText} from '../../Components/ButtonText'
import { CiMail,CiLock } from "react-icons/ci";
import {Link} from 'react-router-dom'



export function LogIn(){

return(

<Container>
<Login>
  <div className="Header">
  <h1>
    RocketMovies
  </h1>
  <span>
    Aplicação para acompanhar tudo que assistir.
  </span>
  </div>

  <div className="Body">
    <h2>Faça seu login</h2>
    <InputText icon={CiMail} title='Email'/>
    <InputText icon={CiLock} title='Senha'/>
    <Button title="Salvar"/>


    <Link to="/register">
    Criar conta
    </Link>

  </div>

   

</Login>

  

<Background/>



</Container>

)


}