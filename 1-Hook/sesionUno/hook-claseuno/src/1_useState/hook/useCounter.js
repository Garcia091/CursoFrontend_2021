import { useState } from 'react'

const useCounter = (value = 10) => {
    
    const [counter, setCounter] = useState(value)

    const handleSubtract = () => {setCounter(counter - 1)}
    const handleReset = () => {setCounter(value)}
    const handelAdd = () => {setCounter(counter + 1)}

    return{
        counter,
        handleSubtract,
        handleReset,
        handelAdd
    }
}

export default useCounter
