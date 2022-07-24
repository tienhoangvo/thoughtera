import { AppShell, Container, Title } from '@mantine/core'
import type { ReactElement, ReactNode } from 'react'
import PrimaryNavigation from './PrimaryNavigation'

type DefaultLayoutProps = {
  children?: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container size={'lg'}>
      <AppShell navbar={<PrimaryNavigation />}>{children}</AppShell>
    </Container>
  )
}

export default DefaultLayout
