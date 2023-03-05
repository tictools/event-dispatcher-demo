import { useEffect, useState } from "react"
import { USER_ACTIONS } from "../../EventDispatcher/actions"
import { useEventDispatcherContext } from "../../hooks/useEventDispatcherContext"

export default function PostActionSuccess() {
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
      USER_ACTIONS.CREATE_USER_SUCCESS,
      updateData
    )
  }, [])

  return (
    <div>
      <p>Success response with payload</p>
      <ul>
        <li>id: {response.id || 'pending'}</li>
        <li>createdAt: {response.createdAt || 'pending'}</li>
      </ul>
    </div>
  )
}