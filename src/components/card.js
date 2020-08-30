import React from "react"
import styles from "./card.module.css"

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardContent}>{children}</div>
      <div className={styles.cardFooter}></div>
    </div>
  )
}

export default Card
