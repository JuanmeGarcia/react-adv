import React, { useContext } from 'react'
import { ImageProps } from '../interfaces'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img }: ImageProps) => {
  const { product } = useContext(ProductContext)

  let imgToShow: string

  if (img) {
    imgToShow = img
  } else {
    imgToShow = product?.img
  }

  return (
    <img className={styles.productImg} src={imgToShow ?? noImage} alt="product" />
  )
}