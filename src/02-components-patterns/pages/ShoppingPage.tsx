import { ProductCard } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

const product = products[0]

export type ShoppingCart = Product & { amount: number }

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />
      <div
      >
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark'
          initialValues={{
            count: 4,
            maxCount: 8
          }}
        >
          {
            ({
              count,
              increaseBy,
              product,
              isMaxCountReached,
              maxCount,
              reset
            }) => {
              return (
                <>
                  <ProductCard.Image className='custom-image' />
                  <ProductCard.Title className='text-bold ' />
                  <ProductCard.Buttons className='custom-buttons' />
                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {
                    !maxCount || (maxCount && count + 2 <= maxCount && !isMaxCountReached)
                      ? (
                        <button onClick={() => increaseBy(2)}>+2</button>

                      ) : null
                  }
                </>
              )
            }
          }
        </ProductCard>

      </div>
    </div>
  )
}
