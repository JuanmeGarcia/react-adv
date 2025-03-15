import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { ButtonsProps } from "../interfaces"


export const ProductButtons = ({
  className,
  style,
}: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext)

  const isMaxValueReached = useCallback(() => counter === maxCount, [maxCount, counter])

  console.log({ isMaxValueReached: isMaxValueReached(), counter, maxCount });



  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button disabled={isMaxValueReached()} className={`${isMaxValueReached() ? styles.disabled : ''} ${styles.buttonAdd}`} onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}