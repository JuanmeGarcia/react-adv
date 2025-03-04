import { useContext } from "react"
import { TitleProps } from "../interfaces"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title, className, style }: TitleProps) => {
  const { product } = useContext(ProductContext)

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ?? product.title}
    </span>
  )
}