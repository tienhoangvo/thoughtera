import ColorSchemeToggle from '../src/client/components/ColorSchemeToggle'
import MainLayout from '../src/client/components/layouts/DefaultLayout'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <ColorSchemeToggle />
    </>
  )
}

// HomePage.getLayout = (page) => {
//   return <MainLayout>{page}</MainLayout>
// }

export default HomePage
