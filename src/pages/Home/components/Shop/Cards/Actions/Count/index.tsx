import { InputContainer } from "./syles"
import { Plus, Minus } from 'phosphor-react'
import { useState } from "react"


export function Counter(){

    const [count, setCount] = useState(1)

    function handleIncrementCount(){
        setCount(count + 1)
    }

    function handleDrecrementCount(){
        setCount(count - 1)
    }


    return (
        <InputContainer>
            <button 
                onClick={ () => handleDrecrementCount() }
                disabled={count <= 1}
            >
            <Minus size={14} weight="bold"/>
            </button>
                <input type="number" min={1} value={count || "1"} readOnly/>
            <button 
                onClick={ ()  => handleIncrementCount() }>
                <Plus size={14} weight="bold"/>
            </button>
        </InputContainer>

    )
}