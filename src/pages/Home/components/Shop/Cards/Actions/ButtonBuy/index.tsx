import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../../contexts/CartContext'
import { ButtonContainer } from './styles'

export function ButtonBuy() {
  const { UpdateCartAmount } = useContext(CartContext)

  return (
    <ButtonContainer>
      <ShoppingCartSimple onClick={UpdateCartAmount} size={22} weight="fill" />
    </ButtonContainer>
  )
}
