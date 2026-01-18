import { useState, useEffect } from 'react'
import { ApiResponse } from '@/types'

export function useApi<T>(
  url: string,
  options?: RequestInit
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, options)
      const result: ApiResponse<T> = await response.json()
      
      if (result.success) {
        setData(result.data)
      } else {
        setError(result.message || 'Something went wrong')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url) {
      fetchData()
    }
  }, [url])

  return { data, loading, error, refetch: fetchData }
}
