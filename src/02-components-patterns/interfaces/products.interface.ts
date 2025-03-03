import { ReactNode } from "react"

export type ProductContextProps = {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}


export type Product = {
  id: string
  title: string
  img: string
}

export type ProductCardProps = {
  product: Product
  children?: ReactNode
}

export type ImageProps = { img?: string }
export type TitleProps = { title?: string }

export type ProductCardHocProps = {
  ({ product, children }: ProductCardProps): JSX.Element;
  Image: ({ img }: ImageProps) => JSX.Element;
  Title: ({ title }: TitleProps) => JSX.Element;
  Buttons: () => JSX.Element;
}