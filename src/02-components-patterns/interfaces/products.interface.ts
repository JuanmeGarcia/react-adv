import { CSSProperties, ReactNode } from "react"
import { Props as ProductCardProps } from "../components/ProductCard"

export type ProductContextProps = {
  counter: number
  increaseBy: (value: number) => void
  product: Product
  maxCount?: number
}


export type Product = {
  id: string
  title: string
  img: string
}

export type ImageProps = {
  img?: string, className?: string, style?: CSSProperties
}
export type TitleProps = {
  title?: string, className?: string, style?: CSSProperties
}
export type ButtonsProps = {
  className?: string, style?: CSSProperties
}

export type ProductCardHocProps = {
  ({ product, children }: ProductCardProps): JSX.Element;
  Image: ({ img }: ImageProps) => JSX.Element;
  Title: ({ title }: TitleProps) => JSX.Element;
  Buttons: ({ className }: ButtonsProps) => JSX.Element;
}

export type onChangeArgs = {
  product: Product;
  amount: number;
}

export type InitialValues = {
  count: number;
  maxCount?: number
}

export type ProductCardHandlers = {
  count: number
  maxCount?: number
  isMaxCountReached: boolean
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}