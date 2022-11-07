import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { Product } from '../@types/productsTypes'

interface ProductsContextTypes {
  products: Product[]
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ProductsContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + 1

      if (amount > stockAmount) {
        console.log('Quantidade fora de estoque')
        return
      } else {
        const product = await api.get(`/products/${productId}`)
        const newProduct = {
          ...product.data,
          amount: 1,
        }
        updatedCart.push(newProduct)
      }
      setCart(updatedCart)
    } catch (err) {
      console.error(err)
    }
  }
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
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
