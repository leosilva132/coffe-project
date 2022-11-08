import {
  ButtonCart,
  ButtonLocation,
  Cartcontainer,
  HeaderContainer,
} from './styles'

import logoImg from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartSize = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <div>
        <ButtonLocation>
          <MapPin size={32} weight="fill" />
          Governador Valadares, MG
        </ButtonLocation>
        <NavLink to="/carrinho" title="carrinho">
          <Cartcontainer>
            <ButtonCart>
              <ShoppingCart size={32} weight="fill" />
            </ButtonCart>
            <span>{cartSize}</span>
          </Cartcontainer>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
