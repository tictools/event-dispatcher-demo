import styles from './Card.module.css'

interface CardProps {
  header: string
  children: React.ReactNode
}

export default function Card({ header, children }: CardProps) {
  return (
    <section>
      <h2>{header}</h2>
      <div className={styles.card__container}>{children}</div>
    </section>
  )
}
