
import { ButtonCart, ButtonLocation, HeaderContainer } from './styles'

import logoImg from '../../assets/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'


export function Header(){
    
    return (
        <HeaderContainer>
            <img src={logoImg} alt="" />

            <div>
                <ButtonLocation>
                    <MapPin size={32} weight="fill"/>
                    Governador Valadares, MG
                </ButtonLocation>
                <ButtonCart>
                    <ShoppingCart size={32} weight="fill" />
                </ButtonCart>
            </div>
        </HeaderContainer>
    )
        
    
}