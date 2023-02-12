import ErrorRequest from "../../components/ErrorRequest"
import LoaderRequest from "../../components/LoaderRequest"
import UsersList from "../../components/UsersList"

type UsersSectionProps = any

export default function UsersSection({ requestStatus }: UsersSectionProps) {
  return (
    <>
      <h2>Users List</h2>
      {requestStatus.state === 'loading' && <LoaderRequest />}
      {requestStatus.state === 'error' && <ErrorRequest error={requestStatus.error} />}
      {requestStatus.state === 'success' && <UsersList users={requestStatus.data} />}</>
  )
}