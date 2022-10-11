
import { ButtonCart, ButtonLocation, HeaderContainer } from './styles'

import logoImg from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'


export function Header(){
    
    return (
        <HeaderContainer>
           <NavLink to="/" >
                <img src={logoImg} alt="" />
           </NavLink> 
            
            
                <div>
                    <ButtonLocation>
                        <MapPin size={32} weight="fill"/>
                        Governador Valadares, MG
                    </ButtonLocation>
                <NavLink to="/carrinho" title="carrinho" >
                    <ButtonCart>
                        <ShoppingCart size={32} weight="fill" />
                    </ButtonCart>
                </NavLink>
                </div>
        </HeaderContainer>
    )
        
    
}