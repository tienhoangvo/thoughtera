import { getProviders } from 'next-auth/react'
import useSWR from 'swr'

const useProviders = () => {
  const { data: providers, error } = useSWR('/api/auth/providers', () => {
    return getProviders()
  })

  const loading = !providers && !error

  return { providers: providers, loading }
}

export default useProviders
