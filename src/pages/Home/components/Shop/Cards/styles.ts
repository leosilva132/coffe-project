import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  & > div {
    width: 100%;
    max-width: 256px;
    height: 310px;
    margin-top: 2.12rem;
    background: ${(props) => props.theme['base-card']};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem 1.25rem;
    border-radius: 6px 36px;

    & > div {
      position: relative;
      top: -36px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      position: relative;
      top: -48px;
    }

    h3 {
      font-family: 'Baloo 2', 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 1188px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const Tags = styled.div`
  margin-bottom: 1rem;
  padding: 4px 8px;
  border-radius: 100px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: bold;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.87rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2.06rem;
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`
