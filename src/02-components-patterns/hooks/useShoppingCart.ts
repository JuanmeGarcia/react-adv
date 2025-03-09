import { useState } from "react";
import { ShoppingCart } from "../pages/ShoppingPage";
import { onChangeArgs } from "../interfaces";



export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Record<string, ShoppingCart>>({});

  const onProductAmountChange = ({ amount, product }: onChangeArgs) => {
    setShoppingCart(prevShoppingCart => {
      const productInCart: ShoppingCart = prevShoppingCart[product.id] ?? {
        ...product,
        amount: 0
      }
      if (Math.max(productInCart.amount + amount, 0) > 0) {
        productInCart.amount += amount
        return {
          ...prevShoppingCart,
          [product.id]: productInCart
        }
      }

      delete prevShoppingCart[product.id]
      return {
        ...prevShoppingCart
      }
    })
  }


  return {
    shoppingCart,
    onProductAmountChange
  }
}
