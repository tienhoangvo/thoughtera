import { BookmarkIcon, HomeIcon, Pencil2Icon } from '@modulz/radix-icons'
import { House, ListDashes, PenNib, SignIn } from 'phosphor-react'
import PrimaryLink from './PrimaryLink'

const primaryLinks = [
  {
    label: 'Home',
    icon: <House />,
    href: '/',
  },
  {
    label: 'Reading List',
    icon: <ListDashes />,
    href: '/reading-list',
  },
  {
    label: 'Write',
    icon: <PenNib />,
    href: '/write',
  },
]

const PrimaryLinks = () => {
  return (
    <div>
      {primaryLinks.map((link) => {
        return <PrimaryLink key={link.label} {...link} />
      })}
    </div>
  )
}

export default PrimaryLinks
