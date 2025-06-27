import { Text, Heading, MultiStep, Button } from '@devnestali-call-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  return (
    <Container>
      <Header>
        <Heading as="strong">¡Conecta tu calendario!</Heading>
        <Text>
          Conecte su calendario para verificar automáticamente los horarios de
          mayor actividad y los nuevos eventos a medida que se programan.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Siguiente paso
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
