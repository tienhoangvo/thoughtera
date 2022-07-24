import { Navbar } from '@mantine/core'
import { useSession } from 'next-auth/react'
import CurrentUser from '../../../auth/CurrentUser/CurrentUser'
import SignInButton from '../../../auth/SignInButton'
import PrimaryLinks from './PrimaryLinks'

const PrimaryNavigation = () => {
  const { status } = useSession()
  return (
    <Navbar width={{ base: 300 }}>
      <Navbar.Section grow>{<PrimaryLinks />}</Navbar.Section>
      <Navbar.Section mb="lg">
        {status === 'authenticated' ? <CurrentUser /> : <SignInButton />}
      </Navbar.Section>
    </Navbar>
  )
}

export default PrimaryNavigation
