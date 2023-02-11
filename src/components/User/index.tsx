import styles from './User.module.css'

type UserProps = {
  user: any
}

export default function User({ user }: UserProps) {
  return (
    <div className={styles['user__container']}>
      <img
        className={styles['user__avatar']}
        alt={user.email} src={user.avatar} />
      <li className={styles['user__info']}>
        <p className={styles['user__name']}>{user.first_name} {user.last_name}</p>
        <p className={styles['user__email']}>@{user.email}</p>
      </li>
    </div>
  )
}