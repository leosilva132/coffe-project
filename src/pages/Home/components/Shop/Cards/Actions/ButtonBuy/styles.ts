import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
