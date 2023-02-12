import styles from './Card.module.css'

type CardProps = {
  header: string
  children: JSX.Element
}


export default function Card({ header, children }: CardProps) {
  return (
    <section >
      <h2>{header}</h2>
      <div className={styles['card__container']}>{children}</div>
    </section>
  )
}