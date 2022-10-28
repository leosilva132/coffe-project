import { Cards } from '../Shop/Cards'
import { ShopContainer } from './styles'

export function Shop() {
  return (
    <ShopContainer>
      <h2>Nossos Cafés</h2>
      <div>
        <Cards />
      </div>
    </ShopContainer>
  )
}
