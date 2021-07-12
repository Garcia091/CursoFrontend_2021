import React from 'react'

import useCounter  from '../hook/useCounter'
import '../../style/main.css'

const CounterCustom = () => {
    const value = 100
    const {
        counter,
        handleSubtract,
        handleReset,
        handelAdd} = useCounter(value)

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

export default CounterCustom
