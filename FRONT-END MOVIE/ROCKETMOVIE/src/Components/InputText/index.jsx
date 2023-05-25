import {Container} from './style'




export function InputText({title,type,icon:Icon,...rest}){

return (
<Container>

  {Icon && <Icon size={22}/>}
  <input 
  type={type}
  defaultValue={rest.value}
  placeholder={title}
  />
  
</Container>
)

}