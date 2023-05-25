import {Container} from './style'

export function TextArea({title,...rest}){

  return(

    <Container>
      <textarea name="" cols="30" rows="10" placeholder={title}></textarea>

    </Container>
  )
}