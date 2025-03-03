import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { Product, ProductContextProps, ProductCardProps } from '../interfaces'

export const ProductContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: (value: number) => { },
  product: {} as Product
})
const { Provider } = ProductContext

export const ProductCard = ({
  product,
  children
}: ProductCardProps) => {
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
          styles.productCard
        }
        key={product.id}
      >
        {children}
      </div>
    </Provider>
  )
}
