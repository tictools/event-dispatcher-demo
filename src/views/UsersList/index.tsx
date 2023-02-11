import User from "../../components/User"
import styles from './UsersList.module.css'

type UsersListProps = {
  users: any[]
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <div className={styles['users__container']}>
      <ul className={styles['users__list']}>
        {users.map(user => <User key={user.id} user={user} />)}
      </ul>
    </div>
  )
}