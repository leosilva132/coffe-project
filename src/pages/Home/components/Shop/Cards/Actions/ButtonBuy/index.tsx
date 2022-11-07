import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../../contexts/CartContext'
import { ButtonContainer } from './styles'

interface ButtonBuyProps {
  id: number
}

export function ButtonBuy({ id }: ButtonBuyProps) {
  const { addProduct } = useContext(CartContext)
  function handleAddProduct() {
    addProduct(id)
  }

  return (
    <ButtonContainer onClick={handleAddProduct}>
      <ShoppingCartSimple size={22} weight="fill" />
    </ButtonContainer>
  )
}
