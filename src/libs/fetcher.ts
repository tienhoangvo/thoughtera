const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init)
  return res.json() as Promise<JSON>
}

export default fetcher
