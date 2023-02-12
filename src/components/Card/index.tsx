import styles from './Card.module.css'

type CardProps = {
  header: string
}


export default function Card({ header }: CardProps) {
  return (
    <section >
      <h2>{header}</h2>
      <p className={styles['card__container']}>This is a card container</p>
    </section>
  )
}