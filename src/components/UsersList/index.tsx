import { UserItem } from '../../types'
import User from '../User'
import styles from './UsersList.module.css'

interface UsersListProps {
  users: UserItem[]
}

export default function UsersList ({ users }: UsersListProps) {
  return (
    <div className={styles.users__container}>
      <ul className={styles.users__list}>
        {users.map(user => <User key={user.id} user={user} />)}
      </ul>
    </div>
  )
}
