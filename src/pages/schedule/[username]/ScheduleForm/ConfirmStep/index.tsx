import { Button, Text, TextArea, TextInput } from '@devnestali-call-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod/v4'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { error: 'El nombre necesita por lo menos 3 caracteres' }),
  email: z.email({ error: 'Ingrese un correo electrónico valido' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          16 de Julio de 2025
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nombre completo</Text>
        <TextInput placeholder="Su nombre" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Correo electrónico</Text>
        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observaciones</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
