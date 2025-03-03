import { ProductTitle } from './ProductTitle'
import { ProductCard as ProductCardHoc } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'
import { ProductCardHocProps } from '../interfaces'

export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
  nashe: 'asd'
})

