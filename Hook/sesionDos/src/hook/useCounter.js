import { useState } from "react"

const useCounter = (value=10) => {
    const [counter, setCounter] = useState(value)

    const reset = () => {
        setCounter(value)
    }
    
    const increment = () => {
        setCounter(counter + 1)
    }
    
    const decrement = () => {
        setCounter(counter - 1)
    }
    
    return{
        counter,
        reset,
        increment,
        decrement
    }
}

export default useCounter
