import { useContext } from 'react'
import noImage from '../assets/no-image.jpg'
import { ImageProps } from '../interfaces'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export const ProductImage = ({ img, className, style }: ImageProps) => {
  const { product } = useContext(ProductContext)

  let imgToShow: string

  if (img) {
    imgToShow = img
  } else {
    imgToShow = product?.img
  }

  return (
    <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow ?? noImage} alt="product" />
  )
}