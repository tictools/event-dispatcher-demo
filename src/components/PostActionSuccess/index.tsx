import { usePostActionSuccess } from "../../hooks"

export default function PostActionSuccess() {
  const { response } = usePostActionSuccess()

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