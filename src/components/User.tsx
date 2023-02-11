type UserProps = {
  user: any
}

export default function User({ user }: UserProps) {
  return (
    <div>
      <img alt={user.email} src={user.avatar} />
      <li >{user.first_name}</li>
    </div>
  )
}