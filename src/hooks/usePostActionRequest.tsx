import { useEffect, useState } from "react"
import { USER_EVENTS } from "../EventDispatcher/actions"
import { useEventDispatcherContext } from "./useEventDispatcherContext"

export default function usePostActionRequest() {
  const eventDispatcher = useEventDispatcherContext()
  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })
  const updateData = (payload: any) => setPayload(prevPayload => ({
    ...prevPayload,
    first_name: payload.first_name,
    last_name: payload.last_name,
    email: `${payload.email}@dispatch.event`
  }))

  useEffect(() => {
    eventDispatcher.subscribe(
      USER_EVENTS.CREATE_USER_FETCH,
      updateData
    )
  }, [])

  return { payload }
}