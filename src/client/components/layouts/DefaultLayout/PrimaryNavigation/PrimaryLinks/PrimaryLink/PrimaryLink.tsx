import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'

type PrimaryLinkProps = {
  icon: React.ReactNode
  label: string
  href: string
}

const PrimaryLink = ({ icon, label, href }: PrimaryLinkProps) => {
  return (
    <Link href={href} passHref>
      <UnstyledButton
        component="a"
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}

export default PrimaryLink
