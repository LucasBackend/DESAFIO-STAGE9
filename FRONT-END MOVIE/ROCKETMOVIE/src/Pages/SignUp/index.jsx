import {Container,Login,Background} from './style';
import {InputText} from '../../Components/InputText';
import {Button} from '../../Components/Button';
import {ButtonText} from '../../Components/ButtonText'
import { CiMail,CiLock } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import {Link} from 'react-router-dom'




export function SignUp(){

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
    <h2>Crie sua conta</h2>
    <InputText icon={RiUser3Line} title='Email'/>
    <InputText icon={CiMail} title='Email'/>
    <InputText icon={CiLock} title='Senha'/>
    <Button title="Salvar"/>
    <Link to="/">
      <IoMdArrowBack size={20}/>
      Voltar para o login
    </Link>

  </div>

   

</Login>

  

<Background/>



</Container>

)


}