import { Container } from "./styles"
import {Button} from "../../components/Button"


export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Leonardo Nunes</span>
      <br />
      <a>code-llan-br</a>
      <Button title='Login'/>
      <Button title='Register'/>
      <Button title='Return'/>
    </Container>
  )
}