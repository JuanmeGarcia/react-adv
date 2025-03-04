import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties, ReactNode } from 'react'
import { Product, ProductContextProps } from '../interfaces'

export const ProductContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: (value: number) => { },
  product: {} as Product
})
const { Provider } = ProductContext


export type Props = {
  product: Product
  children?: ReactNode
  className?: string
  style?: CSSProperties
}


export const ProductCard = ({
  product,
  children,
  className,
  style
}: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div
        className={
          `${styles.productCard} ${className}`
        }
        key={product.id}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}
