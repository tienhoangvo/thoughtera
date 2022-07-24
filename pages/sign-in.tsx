import { Container, Title } from '@mantine/core'

import SignInOptions from '../src/client/components/auth/SignInOptions'

import type { NextPageWithLayout } from './_app'

const SignInPage: NextPageWithLayout = () => {
  return (
    <Container size="xs">
      <Title order={1} align="center" mb="lg">
        Log in
      </Title>
      <SignInOptions />
    </Container>
  )
}

export default SignInPage
