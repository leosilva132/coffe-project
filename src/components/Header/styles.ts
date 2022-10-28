import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 74rem;
  padding: 2rem 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Cartcontainer = styled.div`
  span {
    padding: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    margin-top: -44px;
    margin-left: -24px;
  }
`

export const ButtonLocation = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 4px;

  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  cursor: pointer;
`
