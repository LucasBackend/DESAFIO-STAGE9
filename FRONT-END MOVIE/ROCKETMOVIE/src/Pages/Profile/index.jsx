import {Container,Header} from './style';
import {ButtonText} from '../../Components/ButtonText';
import { AiOutlineArrowLeft,AiOutlineClockCircle } from "react-icons/ai";
import {InputText} from '../../Components/InputText';
import { FiUser,FiCamera,FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import {Button} from '../../Components/Button'
import {Link} from 'react-router-dom'
export function Profile(){
  return (
    <Container>
      <Header>
        
    <Link to='/'>
    <ButtonText title="Voltar">
    <AiOutlineArrowLeft size={20}/>
    </ButtonText>
    </Link>
    </Header>

    <main>
      <div className="Img">
      <img src="https://github.com/LucasBackend.png" alt="" />
      
      <label htmlFor="avatar">
      
      <FiCamera size={22}/>
      <input id="avatar" type="file"/>
      </label>
     
           
      </div>
      <div className="BoxName">
      <InputText type="text" value="Lucas Ribeiro" icon={FiUser}/>
      <InputText type="email" value="lucas_9ribeiro@hotmail.com" icon={AiOutlineMail}/>
      </div>

      <div className="BoxPassword">
      <InputText type="password" title="Senha atual" icon={GiPadlock}/>
      <InputText type="password" title="Nova senha" icon={GiPadlock}/>
      </div>

      <Button title="Salvar"></Button>
    </main>
    </Container>
  )
}