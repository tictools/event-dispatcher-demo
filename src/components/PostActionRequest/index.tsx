import { usePostActionRequest } from "../../hooks"

export default function PostActionRequest() {
  const { payload } = usePostActionRequest()

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