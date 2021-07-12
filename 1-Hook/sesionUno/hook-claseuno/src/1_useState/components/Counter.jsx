import React, { useState } from 'react'
import '../../style/main.css'

const Counter = () => {
    const value = 10
    const [counter, setCounter] = useState(value)

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    const handelAdd = () => {
        setCounter(counter + 1)
    }



    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button type="button"
                className="btn btn-primary"
                onClick={handleSubtract}>-1
            </button>
            <button type="button"
                className="btn btn-warning"
                onClick={handleReset}>Reset
            </button>
            <button type="button"
                className="btn btn-primary"
                onClick={handelAdd}>+1
            </button>
        </div>
    )
}

export default Counter
