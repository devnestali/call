import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@devnestali-call-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bienvenido al Call!</Heading>
        <Text>
          Necesitamos de algunas informaciones para crear su perfil! Puedes
          editarlas mas tarde.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nombre de usuario</Text>
          <TextInput prefix="call.com/" placeholder="su-usuario" />
        </label>

        <label>
          <Text size="sm">Nombre completo</Text>
          <TextInput placeholder="Su nombre" />
        </label>

        <Button type="submit">
          Siguiente paso
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
