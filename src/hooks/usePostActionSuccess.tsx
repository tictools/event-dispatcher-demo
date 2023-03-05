import { useEffect, useState } from "react"
import { USER_EVENTS } from "../EventDispatcher/actions"
import useEventDispatcherContext from "./useEventDispatcherContext"

type UsePostActionSuccessState = {
  id: string,
  createdAt: string,
}

const INITIAL_STATE = {
  id: "",
  createdAt: "",
}
export default function usePostActionSuccess() {
  const eventDispatcher = useEventDispatcherContext()
  const [response, setResponse] = useState<UsePostActionSuccessState>(INITIAL_STATE)

  const updateData = (payload: any) => setResponse(prevPayload => ({
    ...prevPayload,
    id: payload.id,
    createdAt: payload.createdAt,
  }))

  useEffect(() => {
    eventDispatcher.subscribe(
      USER_EVENTS.CREATE_USER_SUCCESS,
      updateData
    )
  }, [])

  return { response }
}