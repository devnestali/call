import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@devnestali-call-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Casi llegamos</Heading>
        <Text>
          Establezca el rango de tiempo en el que estará disponible cada día de
          la semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Lunes</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput type="time" step={5} />
              <TextInput type="time" step={5} />
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Martes</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput type="time" step={5} />
              <TextInput type="time" step={5} />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>

        <Button type="submit">
          Siguiente paso
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
