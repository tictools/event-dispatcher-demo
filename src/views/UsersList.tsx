import User from "../components/User"

type UsersListProps = {
  users: any[]
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <ul>{users.map(user => <User key={user.id} user={user} />)}</ul>
  )
}