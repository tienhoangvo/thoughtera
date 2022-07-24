import { Box, Button, Group } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { SignIn } from 'phosphor-react'
import { useState } from 'react'
import SignInModal from '../SignInModal'

const SignInButton = () => {
  const [opened, setOpened] = useState(false)
  const closeLoginModal = () => {
    setOpened(false)
  }

  const handleLoginModalToggle = () => {
    setOpened(!opened)
  }
  return (
    <>
      <Box p="sm">
        <Button
          leftIcon={<SignIn />}
          variant="filled"
          fullWidth
          onClick={handleLoginModalToggle}
        >
          Sign in
        </Button>
      </Box>

      <SignInModal opened={opened} onClose={closeLoginModal} />
    </>
  )
}

export default SignInButton
