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
  cartAmount: number
  UpdateCartAmount: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ProductsContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([])
  const [cart, setCart] = useState<Products[]>([])
  const [cartAmount, setCartAmount] = useState(0)

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

  function UpdateCartAmount() {
    setCartAmount(cartAmount + 1)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        cartAmount,
        UpdateCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
