import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@devnestali-call-ui/react'
import { Container, Header } from '../styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormAnnotation, ProfileBox } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileFormData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    await api.put('users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bienvenido al Call!</Heading>
        <Text>
          Necesitamos de algunas informaciones para crear su perfil! Puedes
          editarlas mas tarde.
        </Text>
        <MultiStep size={4} currentStep={4} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>
          {/* @ts-expect-error: the src prop exists on Avatar component */}
          <Avatar src={session.data?.user.avatar_url} alt="" />
        </label>

        <label>
          <Text size="sm">Sobre ti</Text>
          <TextArea {...register('bio')} />
          <FormAnnotation size="sm">
            Hablé un poco sobre ti. Esto será exhibido en su perfil personal.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
