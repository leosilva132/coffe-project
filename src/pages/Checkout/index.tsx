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
  PayElement,
  PaytypeContainer,
} from './styles'

import { CurrencyDollarSimple, MapPinLine, CreditCard } from 'phosphor-react'

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
            <PayElement>
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </PayElement>
            <PayElement>
              <CreditCard size={16} color="#8047F8" />
              Cartão de Débito
            </PayElement>
            <PayElement>
              <CreditCard size={16} color="#8047F8" />
              Dinheiro
            </PayElement>
          </PaytypeContainer>
        </PagContainer>
      </DeliveryContainer>
      <CoffeCardContainer>
        <h2>Cafés Selecionados</h2>
      </CoffeCardContainer>
    </CheckoutContainer>
  )
}
