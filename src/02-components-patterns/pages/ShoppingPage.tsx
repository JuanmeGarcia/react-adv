import { ProductCard } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'


export type ShoppingCart = Product & { amount: number }

export const ShoppingPage = () => {
  const {
    onProductAmountChange,
    shoppingCart
  } = useShoppingCart()
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}
      >
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark'
              onChange={onProductAmountChange}
              value={shoppingCart[product.id]?.amount ?? 0}
            >
              <ProductCard.Image className='custom-image' />
              <ProductCard.Title className='text-bold ' />
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
          )

          )
        }
      </div>
      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark'
              style={{
                width: '100px'
              }}
              value={product.amount}
              onChange={onProductAmountChange}
            >
              <ProductCard.Image className='custom-image' />
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
