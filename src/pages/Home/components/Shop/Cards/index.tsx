import { Buy, CardContainer, Description, Tags } from "./styles";


import coffeExpresso from '../../.../../../../../assets/Coffee-expresso.png'
import { Counter } from "./Actions/Count";
import { ButtonBuy } from "./Actions/ButtonBuy";


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
                    <Counter />
                    <ButtonBuy />
                </Buy>
            </div>
        </CardContainer>
        
    )
}