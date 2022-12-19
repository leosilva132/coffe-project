import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { Product } from '../@types/productsTypes'

interface updatedProduct {
  productId: number
  amount: number
}
interface ProductsContextTypes {
  products: Product[]
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  updatedCartAmount: ({ productId, amount }: updatedProduct) => void
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
        console.log('Produto fora de estoque')
        return
      }

      if (productExists) {
        productExists.amount = amount
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
      console.log(err)
    }
  }

  const updatedCartAmount = async ({ productId, amount }: updatedProduct) => {
    try {
      if (amount <= 0) {
        return
      }

      const stock = await api.get(`/stock/${productId}`)
      const stockAmount = stock.data.amount

      if (amount > stockAmount) {
        console.log('Quantidade fora de estoque')
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch (err) {
      console.log('o erro está caindo aqui')
    }
  }

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
        cart,
        addProduct,
        updatedCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
