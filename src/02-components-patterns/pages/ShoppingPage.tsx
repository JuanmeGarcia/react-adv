import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

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
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title='xdddd' />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
