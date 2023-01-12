import {
  CheckoutContainer,
  CoffeCardContainer,
  DeliveryContainer,
  FieldCep,
  FieldComplementeContainer,
  FieldStreet,
  FieldUf,
  FormContainer,
  PagContainer,
  PaytypeContainer,
  RequestContainer,
  ResumeRequestContainer,
} from './styles'

import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import { PayMode } from './components/PayElement'
import { CoffeItem } from './components/CoffeItem'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryContainer>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <h4>
            <MapPinLine size={22} color="#C47F17" />
            Endereço de entrega
          </h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          {/* testing different solutions to make this form  */}

          <FieldCep placeholder="CEP" type={'number'} required />
          <FieldStreet placeholder="Rua" required />
          <FieldComplementeContainer>
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </FieldComplementeContainer>
          <FieldUf>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </FieldUf>
        </FormContainer>
        <PagContainer>
          <h4>
            <CurrencyDollarSimple size={22} color="#8047F8" />
            Pagamento
          </h4>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <PaytypeContainer>
            <PayMode type="Cartão de Crédito" isActive={true} />
            <PayMode type="Cartão de Débito" isActive={false} />
            <PayMode type="Dinheiro" isActive={false} />
          </PaytypeContainer>
        </PagContainer>
      </DeliveryContainer>
      <CoffeCardContainer>
        <h2>Cafés Selecionados</h2>
        <RequestContainer>
          <CoffeItem />
          <ResumeRequestContainer>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </ResumeRequestContainer>
          <button>Confirmar Pedido</button>
        </RequestContainer>
      </CoffeCardContainer>
    </CheckoutContainer>
  )
}
