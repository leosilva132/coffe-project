import { useEffect, useState } from "react";
import { api } from "../../../../../lib/axios";


import { Buy, CardContainer, Description, Tags } from "./styles";
import coffeExpresso from '../../.../../../../../assets/Coffee-expresso.png'
import { Counter } from "./Actions/Count";
import { ButtonBuy } from "./Actions/ButtonBuy";


interface Products {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
}


export function Cards(){

const [products, setProducts] = useState<Products[]>([])

async function fetchProducts(){
    const response = await api.get('/products')

    setProducts(response.data)
 }

 useEffect(() => {
    fetchProducts()
 }, []);





    return (
        <CardContainer>
            {products.map(product => {
                return (
                    <div key={product.id}>
                         <img src={product.img} alt="" />
                        <div>
                            <Tags>Tradicional</Tags>
                            <h3>{product.title}</h3>
                            <Description>{product.description}</Description>
                            <Buy>
                                <p>R$ <span>{product.price}</span></p>
                                <Counter />
                                <ButtonBuy />
                            </Buy>
                        </div>
                    </div>
                )
            })}
            
        </CardContainer>
        
    )
}