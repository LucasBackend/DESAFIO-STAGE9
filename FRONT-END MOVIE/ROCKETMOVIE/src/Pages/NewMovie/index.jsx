import {Container,Content,Main} from './style';
import {Header} from '../../Components/Header';
import {ButtonText} from '../../Components/ButtonText';
import { AiOutlineArrowLeft } from "react-icons/ai";
import {InputText} from '../../Components/InputText'
import { TextArea } from '../../Components/TextArea';
import{Marcadores} from '../../Components/Marcadores'
import {Button} from '../../Components/Button'
import {Link} from 'react-router-dom'
export function NewMovie(){

  return(


    <Container>
      <Header/>

      <Content>


      <Main>
      <div className="ContainerBox">
      <div className="HeaderBox">
      <div>
      <Link to="/">
        <AiOutlineArrowLeft size={20}/>
        Voltar
      </Link>
      </div>
      <h1>
        Novo Filme
      </h1>
      </div>

      <div>
        <InputText title="Título" type="text" />
        <InputText title="Sua nota (de 0 a 5)" type="text" />
      </div>
      <TextArea title="Observações"/>

      <div className="Marcadores">
        <h2>Marcadores</h2>

        <div className="CaixaMarcadores">
          <Marcadores value="React"/>
          <Marcadores isActivate={true}/>
        </div>
        
      </div>

      <div className="Buttons">
      <Button title="Excluir Alterações" isDelete={true}></Button>
      <Button title="Salvar alterações"></Button>
      </div>

      </div>

      </Main>

    


      </Content>




    </Container>

  )


}