import React, { useState } from 'react'
import Small from './Small'
import useCounter from '../hook/useCounter'

const Memorize = () => {

    const{counter,increment} = useCounter(100)
    
    const [show,setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />

            <button
                className="btn btn-info"
                onClick={increment}
            > +1</button>

            <button
                className="btn btn-info"
                onClick = {()=>{
                    setShow(!show) 
                }}
            > Show/hide {JSON.stringify(show)} </button>
        </div>
    )
}

export default Memorize
