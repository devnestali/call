import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@devnestali-call-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'El usuario necesita tener al menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'El usuario solo puede tener letras y guiones.',
    }),
  name: z
    .string()
    .min(3, { message: 'El nombre necesita tener al menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  async function handleRegisterForm(data: RegisterFormData) {
    console.log(data)
  }

  useEffect(() => {
    if (router.query?.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

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

      <Form as="form" onSubmit={handleSubmit(handleRegisterForm)}>
        <label>
          <Text size="sm">Nombre de usuario</Text>
          <TextInput
            prefix="call.com/"
            placeholder="su-usuario"
            {...register('username')}
          />

          {errors.username && <FormError>{errors.username.message}</FormError>}
        </label>

        <label>
          <Text size="sm">Nombre completo</Text>
          <TextInput placeholder="Su nombre" {...register('name')} />

          {errors.name && <FormError>{errors.name.message}</FormError>}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Siguiente paso
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
