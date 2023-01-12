import coffImg from '../../../../assets/Type=Expresso.png'
import { ButtonsandNameContainer, CoffeSelected } from './styles'

import { Trash } from 'phosphor-react'
export function CoffeItem() {
  return (
    <div>
      <CoffeSelected>
        <img src={coffImg} alt="" />
        <ButtonsandNameContainer>
          <p>Expresso tradicional</p>
          <div>
            <div>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>

            <button>
              <Trash size={16} color="#8047F8" />
              Remover
            </button>
          </div>
        </ButtonsandNameContainer>
        <div>
          <span>R$ 9,90</span>
        </div>
      </CoffeSelected>
    </div>
  )
}
