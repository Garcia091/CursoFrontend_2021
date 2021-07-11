import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
    const [counter, setsCounter] = useState(10)

    const increment = useCallback((num) => {
        setsCounter( c => c + num)
    },[counter])

   console.log()
    

    return (
        <div>
            <h1>Contador CallBack {counter}</h1>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook
