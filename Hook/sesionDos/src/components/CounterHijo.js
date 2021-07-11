import React from 'react'

const CounterHijo = ({texto,cuenta,increment}) => {
    console.log('Render Hijo', texto)
    return (
        <div>
            <p>{texto}</p>
            <h1>{cuenta}</h1>
            <button onClick={()=>increment(5)}>+1</button>
        </div>
    )
}

export default React.memo(CounterHijo) 
