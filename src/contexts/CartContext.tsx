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
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ProductsContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([])

  async function fetchProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
