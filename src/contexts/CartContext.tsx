import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Products {
  id: number
  img: string
  title: string
  description: string
  price: number
}

interface ProductsContextTypes {
  products: Products[]
  cart: Products[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ProductsContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([])
  const [cart, setCart] = useState<Products[]>([])

  async function fetchProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  async function fetchProductsAmount() {
    const response = await api.get('/stock')
    setCart(response.data)
  }

  useEffect(() => {
    fetchProducts()
    fetchProductsAmount()
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
