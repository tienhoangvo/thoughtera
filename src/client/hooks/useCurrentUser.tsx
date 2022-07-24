import { getSession } from 'next-auth/react'
import useSWR from 'swr'

const useCurrentUser = () => {
  const { data: session, error } = useSWR('/api/auth/session', () => {
    return getSession()
  })

  console.log('aasss', session)
  const loading = !session || !error

  return { user: session?.user, loading }
}

export default useCurrentUser
