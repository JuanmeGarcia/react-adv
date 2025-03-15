import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces"

type Props = {
  onChange?: (args: onChangeArgs) => void
  product: Product
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, initialValues, value = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value)
  const isMounted = useRef<boolean>(false)

  console.log({
    initialValues,
    counter
  });


  const increaseBy = (value: number) => {
    console.log({ value });

    const newValue = Math.max(counter + value, 0)

    if (initialValues?.maxCount && initialValues.maxCount < newValue) {
      return
    }
    setCounter(newValue)
    onChange?.({
      product,
      amount: newValue
    })
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    setCounter(initialValues?.count ?? value)
  }, [value, initialValues?.count])

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter
  }
}
