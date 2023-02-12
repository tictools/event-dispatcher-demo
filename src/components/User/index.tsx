import { UserItem } from '../../types'
import styles from './User.module.css'

interface UserProps {
  user: UserItem
}

export default function User({ user }: UserProps) {
  return (
    <div className={styles.user__container}>
      <img
        className={styles.user__avatar}
        alt={user.email} src={user.avatar}
      />
      <li className={styles.user__info}>
        <p className={styles.user__name}>{user.first_name} {user.last_name}</p>
        <p className={styles.user__email}>@{user.email}</p>
      </li>
    </div>
  )
}
