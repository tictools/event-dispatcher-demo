import { useEffect, useState } from "react"
import { USER_EVENTS } from "../EventDispatcher/actions"
import { useEventDispatcherContext } from "./useEventDispatcherContext"

export default function usePostActionSuccess() {
  const eventDispatcher = useEventDispatcherContext()
  const [response, setResponse] = useState({
    id: "",
    createdAt: "",
  })
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