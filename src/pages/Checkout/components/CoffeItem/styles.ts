import styled from 'styled-components'
export const CoffeSelected = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 20px;
  border-bottom: 1px solid #e6e5e5;

  img {
    width: 100%;
    max-width: 64px;
    height: 64px;
  }
`

export const ButtonsandNameContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 8;

    button {
      width: 100%;
      max-width: 91px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background: #e6e5e5;
      border-radius: 6px;
      font-size: 11px;
      color: #574f4d;
      text-transform: uppercase;
      font-weight: 400;

      &:hover {
        background: #d7d5d5;
      }

      &:first-child {
        flex: 1;
      }
    }
  }
`
