import { ShoppingCartSimple } from 'phosphor-react'
import { ButtonContainer } from './styles'

export function ButtonBuy(){
    return(
        <ButtonContainer>
            <ShoppingCartSimple size={22} weight="fill"/>
        </ButtonContainer>
    )
}