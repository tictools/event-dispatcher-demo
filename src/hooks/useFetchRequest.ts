import { useEffect, useState } from 'react'
import http from '../services/http'

interface UseFetchRequestState {
  state: 'idle' | 'loading' | 'success' | 'error'
  data: any | null
  error: null | Error
}

const INITIAL_STATE = {
  state: 'idle',
  data: null,
  error: null
} as UseFetchRequestState

export default function useFetchRequest(url: string) {
  const [requestStatus, setRequestStatus] =
    useState<UseFetchRequestState>(INITIAL_STATE)

  const handleRequestSuccess = (data: any) => {
    setRequestStatus({
      state: 'success',
      data: data.data,
      error: null
    })
  }

  const handleRequestError = (error: Error) => {
    setRequestStatus({
      state: 'error',
      data: null,
      error
    })
  }

  useEffect(() => {
    setRequestStatus((prevState) => ({
      ...prevState,
      state: 'loading'
    }))

    http.fetchRequest(url).then(handleRequestSuccess).catch(handleRequestError)
  }, [url])

  return requestStatus
}
