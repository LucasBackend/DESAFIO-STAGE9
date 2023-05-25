import { Container } from './style'

export function Tags ({data,...rest}){

  return(
    <Container>

      {data.map(data=><span key={data.ID}>{data.TAG}</span>)}
      
    </Container>
  )

}