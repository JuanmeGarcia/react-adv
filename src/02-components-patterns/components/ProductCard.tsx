import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties } from 'react'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces'

export const ProductContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: (value: number) => { },
  product: {} as Product,
  maxCount: 0
})
const { Provider } = ProductContext



export type Props = {
  product: Product
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}


export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, isMaxCountReached, reset, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues
  })

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount
      }}
    >
      <div
        className={
          `${styles.productCard} ${className}`
        }
        key={product.id}
        style={style}
      >
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          product,
          reset,
          maxCount: initialValues?.maxCount
        })}
      </div>
    </Provider>
  )
}
