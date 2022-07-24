import React from 'react'
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  Menu,
} from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { SignOut } from 'phosphor-react'

const CurrentUser = () => {
  const theme = useMantineTheme()

  const { user } = useCurrentUser()

  const handleSignOutClick = () => {
    signOut()
  }

  if (!user) return null

  return (
    <Menu
      sx={{ width: '100%' }}
      placement="start"
      control={
        <UnstyledButton
          sx={{
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
          }}
        >
          <Group>
            <Avatar src={user?.image} radius="xl" />
            <Box sx={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {user?.name}
              </Text>
              <Text color="dimmed" size="xs">
                {user?.email}
              </Text>
            </Box>
          </Group>
        </UnstyledButton>
      }
    >
      <Menu.Item icon={<SignOut />} onClick={handleSignOutClick}>
        Sign out
      </Menu.Item>
    </Menu>
  )
}

export default CurrentUser
