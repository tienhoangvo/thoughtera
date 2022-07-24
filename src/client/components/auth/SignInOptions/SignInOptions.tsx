import { LoadingOverlay, Stack } from '@mantine/core'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import useProviders from '../../../hooks/useProviders'
import ProviderOption from '../ProviderOption'

const SignInOptions = () => {
  const { providers, loading } = useProviders()

  const router = useRouter()

  const callbackUrl = (router.query.callbackUrl as string) ?? router.pathname
  const providerOptions = Object.values(providers ?? {}).map((provider) => {
    return (
      <ProviderOption
        key={provider.id}
        id={provider.id}
        name={provider.name}
        onClick={() =>
          signIn(provider.id, {
            callbackUrl: callbackUrl,
          })
        }
      />
    )
  })

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Stack spacing="sm">{providerOptions}</Stack>
    </>
  )
}

export default SignInOptions
