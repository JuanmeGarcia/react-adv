import { useState } from "react";
import { ShoppingCart } from "../pages/ShoppingPage";
import { onChangeArgs } from "../interfaces";



export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Record<string, ShoppingCart>>({});

  const onProductAmountChange = ({ amount, product }: onChangeArgs) => {
    setShoppingCart(oldShoppingCart => {

      if (amount === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, amount }
      }
    })

  }



  return {
    shoppingCart,
    onProductAmountChange
  }
}
