import { Button, DefaultMantineColor, ThemeIcon } from '@mantine/core'
import {
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  SignIn,
  TwitterLogo,
} from 'phosphor-react'

type ProviderOptionProps = {
  id: string
  name: string
  onClick: () => void
}

const getIcon = (id: string) => {
  switch (id) {
    case 'facebook': {
      return <FacebookLogo />
    }

    case 'google': {
      return <GoogleLogo />
    }

    case 'github': {
      return <GithubLogo />
    }

    case 'twitter': {
      return <TwitterLogo />
    }

    default: {
      return <SignIn />
    }
  }
}

const ProviderOption = ({ id, name, onClick }: ProviderOptionProps) => {
  return (
    <Button
      leftIcon={<ThemeIcon variant="light">{getIcon(id)}</ThemeIcon>}
      variant="light"
      fullWidth
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

export default ProviderOption
