import { useEffect, useState } from "react"
import { onChangeArgs, Product } from "../interfaces"

type Props = {
  onChange?: (args: onChangeArgs) => void
  product: Product
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange?.({
      product,
      amount: newValue
    })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}
