import { useContext } from "react"
import { TitleProps } from "../interfaces"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title }: TitleProps) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {title ?? product.title}
    </span>
  )
}