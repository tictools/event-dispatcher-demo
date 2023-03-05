import { useEffect, useState } from "react"
import { USER_EVENTS } from "../../EventDispatcher/actions"
import { useEventDispatcherContext } from "../../hooks/useEventDispatcherContext"

export default function PostActionRequest() {
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

  return (
    <div>
      <p>Action dispatched with payload</p>
      <ul>
        <li>first_name: {payload.first_name || 'pending'}</li>
        <li>last_name: {payload.last_name || 'pending'}</li>
        <li>email: {`${payload.email}` || 'pending'}</li>
      </ul>
    </div>
  )
}