export interface Product {
  id: number
  img: string
  title: string
  description: string
  price: number
  amount: number
  tag: string[]
}

export interface Stock {
  id: number
  amount: number
}
