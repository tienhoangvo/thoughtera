import { LoadingOverlay, Modal, Stack } from '@mantine/core'
import { signIn } from 'next-auth/react'

import useProviders from '../../../hooks/useProviders'
import ProviderOption from '../ProviderOption/ProviderOption'
import SignInOptions from '../SignInOptions'

type LoginModalProps = {
  opened: boolean
  onClose: () => void
}

const LoginModal = ({ opened, onClose }: LoginModalProps) => {
  const { providers, loading } = useProviders()

  const providerOptions = Object.values(providers ?? {}).map((provider) => {
    return (
      <ProviderOption
        key={provider.id}
        id={provider.id}
        name={provider.name}
        onClick={() => {
          signIn(provider.id)
        }}
      />
    )
  })

  return (
    <Modal opened={opened} title="Login" onClose={onClose}>
      <LoadingOverlay visible={loading} />
      {<SignInOptions />}
    </Modal>
  )
}

export default LoginModal
