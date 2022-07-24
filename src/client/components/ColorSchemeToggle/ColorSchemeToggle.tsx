import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core'
import { MoonIcon, SunIcon } from '@modulz/radix-icons'

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const handleColorSchemeClick = () => {
    toggleColorScheme()
  }
  return (
    <Group>
      <ActionIcon onClick={handleColorSchemeClick}>
        {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </ActionIcon>
    </Group>
  )
}

export default ColorSchemeToggle
