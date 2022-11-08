import { InputContainer } from './syles'
import { Plus, Minus } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../../contexts/CartContext'
import { Product } from '../../../../../../../@types/productsTypes'

interface counterProps {
  product: Product
}
export function Counter({ product }: counterProps) {
  const { updatedCartAmount } = useContext(CartContext)

  function handleIncrementCount(product: Product) {
    updatedCartAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleDrecrementCount(product: Product) {
    updatedCartAmount({ productId: product.id, amount: product.amount - 1 })
  }

  return (
    <InputContainer>
      <button onClick={() => handleDrecrementCount(product)}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" min={1} value={product.amount} readOnly />
      <button onClick={() => handleIncrementCount(product)}>
        <Plus size={14} weight="bold" />
      </button>
    </InputContainer>
  )
}
