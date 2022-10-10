import { Buy, CardContainer, Description, Tags } from "./styles";
import { ShoppingCartSimple } from 'phosphor-react'


import coffeExpresso from '../../.../../../../../assets/Coffee-expresso.png'


export function Cards(){
    return (
        <CardContainer>
            <img src={coffeExpresso} alt="" />
            <div>
                <Tags>Tradicional</Tags>
                <h3>Expresso Tradicional</h3>
                <Description>O tradicional café feito com água quente e grãos moídos</Description>
                <Buy>
                    <p>R$ <span>9,90</span></p>
                    <input 
                    type="number" 
                    placeholder="1"
                    min={1}
                    />
                    <button>
                        <ShoppingCartSimple size={22} weight='fill' color="#F3F2F2"/>
                    </button>
                </Buy>
            </div>
        </CardContainer>
        
    )
}