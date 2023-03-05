import { useEffect, useState } from 'react'
import http from '../services/http'

type ResponseState = 'idle' | 'loading' | 'success' | 'error'

interface UseFetchRequestState<GenericType> {
  state: ResponseState
  data: GenericType | null
  error: null | Error
}

const INITIAL_STATE = {
  state: 'idle',
  data: null,
  error: null
}

export default function useFetchRequest<GenericType>(url: string) {
  const [requestStatus, setRequestStatus] = useState<UseFetchRequestState<GenericType>>(INITIAL_STATE as UseFetchRequestState<GenericType>)

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

    http.requestData(url).then(handleRequestSuccess).catch(handleRequestError)
  }, [url])

  return requestStatus
}
