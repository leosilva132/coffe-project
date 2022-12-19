import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 40px auto auto auto;
  max-width: 70rem;
`
export const DeliveryContainer = styled.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const CoffeCardContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const FormContainer = styled.form`
  background-color: #f3f2f2;
  padding: 40px;
  border-radius: 6px;
  margin-top: 15px;
  font-family: 'Roboto', sans-serif;
  h4 {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    margin-top: 2px;
    padding-left: 32px;
    font-size: 0.87rem;
    line-height: 130%;
    margin-bottom: 32px;
  }

  input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #e6e5e5;

    &::placeholder {
      font-size: 0.87rem;
      color: #8d8686;
    }
  }
`
export const PagContainer = styled.div`
  background-color: #f3f2f2;
  margin-top: 12px;
  border-radius: 6px;
  padding: 40px;

  h4 {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    margin-top: 2px;
    padding-left: 29px;
    font-size: 0.87rem;
    margin-bottom: 32px;
  }
`

export const FieldCep = styled.input`
  margin-bottom: 16px;
`
export const FieldStreet = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`
export const FieldComplementeContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  input {
    width: 100%;

    &:first-child {
      max-width: 200px;
    }
  }
`

export const FieldUf = styled.div`
  display: flex;
  gap: 12px;
  input {
    width: 100%;

    &:first-child {
      max-width: 200px;
    }
    &:last-child {
      max-width: 60px;
    }
  }
`

export const PaytypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`
export const PayElement = styled.div`
  min-width: 179px;
  background-color: #e6e5e5;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 0.75rem;
  justify-content: flex-start;
  padding: 16px;
  gap: 12px;
  border: 1px solid #8047f8;
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
  color: #574f4d;
`
