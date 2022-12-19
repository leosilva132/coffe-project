import { Buy, CardContainer, Description, TagContainer, Tags } from './styles'
import { Counter } from './Actions/Count'
import { ButtonBuy } from './Actions/ButtonBuy'
import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'

export function Cards() {
  const { products } = useContext(CartContext)

  const PriceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })

  return (
    <CardContainer>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.img} alt="" />
            <div>
              <TagContainer>
                {product.tag.map((tag) => {
                  return <Tags key={product.id}>{tag}</Tags>
                })}
              </TagContainer>

              <h3>{product.title}</h3>
              <Description>{product.description}</Description>
              <Buy>
                <p>
                  R$ <span>{PriceFormatted.format(product.price)}</span>
                </p>
                <Counter {...product} />
                <ButtonBuy id={product.id} />
              </Buy>
            </div>
          </div>
        )
      })}
    </CardContainer>
  )
}
