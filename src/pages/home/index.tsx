import { Heading, Text } from '@devnestali-call-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/calendarImage.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Programación Descomplicada</Heading>
        <Text size="xl">
          Conecte su calendario y permita que las personas reserven citas cuando
          lo deseen.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendario que simboliza aplicación en funcionamiento"
        />
      </Preview>
    </Container>
  )
}
