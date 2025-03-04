import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '123asd',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-bold ' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className="custom-image" />
          <ProductTitle title='xdddd' className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{
          background: 'red'
        }}>
          <ProductImage style={{
            transform: 'scale(0.95)',
            objectFit: 'cover'
          }} />
          <ProductTitle />
          <ProductButtons style={{
            justifyContent: 'flex-end'
          }} />
        </ProductCard>

      </div>
    </div>
  )
}
